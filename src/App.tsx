import { Globe, BarChart } from './components'
import { random_rgba, getSortedYear } from './utils'
import './App.css'
import { Get } from './api'
import { data } from './interfaces'
import {CountryInfo} from './interfaces/Country'
import {useEffect, useState} from 'react'

function App() {
  const styles = {
    container: "flex flex-col items-center justify-center my-12"
  }
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const [data, setData] = useState<any>()

  const dataByYear = new Map();

  /* -------------------------------------------------------------------------- */
  /*                                   METHODS                                  */
  /* -------------------------------------------------------------------------- */
  const transformData = (countryInfo: CountryInfo[]) => {
    if (dataByYear.size === 0) {
      getSortedYear(countryInfo).map((year) => {
        dataByYear.set(year, [])
      }) 
    }
    countryInfo.map((country) => {
      dataByYear.get(+country.date).push({
        id: country.country.id,
        title: country.country.value,
        value: country.value,
        color: random_rgba(country.country.id)
      })
    })  
    setData(dataByYear)
  }

  /* --------------------------------- OnMount, UseEffect -------------------------------- */

  useEffect(() => {
    Get.allCountries()
      .then((res) => {
        res[1].map((country) => {
          Get.countryInfo(country.id)
            .then((res) => transformData(res[1]))
        })
      })
  }, [])

  useEffect(() => { }, [data])

  /* -------------------------------------------------------------------------- */
  /*                                     JSX                                    */
  /* -------------------------------------------------------------------------- */
  return (
      <div className="App">
        <div className={styles.container}>
        <Globe />
        {data && <BarChart allData={data} />}
        </div>      
      </div>
  )
}

export default App
