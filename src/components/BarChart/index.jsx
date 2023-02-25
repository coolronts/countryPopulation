import React, { useState, useEffect } from 'react';
import ChartRace from 'react-chart-race';
 
export default function BarChart({ allData }) {
  /* -------------------------------------------------------------------------- */
  /*                                   STATES                                   */
  /* -------------------------------------------------------------------------- */
  const [data, setData] = useState([]);
  const [year, setYear] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  
  /* -------------------------------------------------------------------------- */
  /*                                     CSS                                    */
  /* -------------------------------------------------------------------------- */
  const styles = {
    container: "flex justify-center items-center",
    year: "text-7xl text-slate-500",
    button: "ml-12 bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600 transition duration-200 ease-in-out cursor-pointer",
    disabledButton: "ml-12 bg-slate-500 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed"
  }
  /* -------------------------------------------------------------------------- */
  /*                                   METHODS                                  */
  /* -------------------------------------------------------------------------- */
  const Replay = () => {
    setIsDisabled(true);
    const keys = allData.keys();
    let i = 0;
    const intervalId = setTimeout(function nextYear() {
      const currentKey = keys.next().value;
      if (!currentKey) {
        clearTimeout(intervalId);
        setIsDisabled(false);
        return;
      }
      setData(allData.get(currentKey));
      setYear(currentKey);
      i++;
      if (i < allData.size)
        setTimeout(nextYear, 500);
    }, 500);
    return () => clearTimeout(intervalId);
  }
  /* -------------------------------------------------------------------------- */
  /*                              OnMount UseEffect                             */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const keys = allData.keys();
    let i = 0;
    const intervalId = setTimeout(function nextYear() {
      const currentKey = keys.next().value;
      if (!currentKey) {
        clearTimeout(intervalId);
        return;
      }
      setData(allData.get(currentKey));
      setYear(currentKey);
      i++;
      if (i < allData.size)
        setTimeout(nextYear, 2000);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                     JSX                                    */
  /* -------------------------------------------------------------------------- */
  return (
  
    <div className={styles.container}>
      {data.length === 0 ? <p>Loading</p> :
        <>
          <ChartRace data={data} 
              backgroundColor='#fff'
              width={760}
              padding={1}
              itemHeight={24}
              gap={1}
              titleStyle={{ font: 'normal 400 24px Arial', color: '#f2f' }}
              valueStyle={{ font: 'normal 400 16px Arial', color: 'rgba(120,120,120)' }}
          />
          <div className="flex items-center">
            <p className={styles.year}>{year}</p> 
            <button className={isDisabled? styles.disabledButton : styles.button} onClick={() => Replay()} >Replay</button>
            </div>
          </>
      }
      </div>
    );
  }
 
