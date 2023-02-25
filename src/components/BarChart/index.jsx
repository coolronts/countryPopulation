import React, { useState, useEffect } from 'react';
import ChartRace from 'react-chart-race';
 
export default function BarChart({ allData }) {
  /* -------------------------------------------------------------------------- */
  /*                                   STATES                                   */
  /* -------------------------------------------------------------------------- */
  const [data, setData] = useState([]);
  const [year, setYear] = useState(null);
  
  /* -------------------------------------------------------------------------- */
  /*                                     CSS                                    */
  /* -------------------------------------------------------------------------- */
  const styles = {
    container: "flex justify-center items-center",
    year: "text-7xl text-slate-500"
  }
  /* -------------------------------------------------------------------------- */
  /*                                   METHODS                                  */
  /* -------------------------------------------------------------------------- */
  const Replay = () => {
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
        <button onClick={() => Replay()}>Log Data</button>
        <ChartRace data={data} 
            backgroundColor='#fff'
            width={760}
            padding={1}
            itemHeight={24}
            gap={1}
            titleStyle={{ font: 'normal 400 24px Arial', color: '#f2f' }}
            valueStyle={{ font: 'normal 400 16px Arial', color: 'rgba(120,120,120)' }}
      />
      <p className={styles.year}>{year}</p>
      </div>
    );
  }
 
