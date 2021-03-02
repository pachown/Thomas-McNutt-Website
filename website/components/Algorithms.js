import styles from '../styles/Layout.module.css'
import algoData from '../algorithms.js'
import React, { useState, useEffect } from 'react'

const Algorithms = ({ children }) => {
  const [data, setData] = useState(null);
  let algoItems = [];

  useEffect(() => {
    setData(algoData);
  }, [])
  return (
    <div className={styles.algos}>
      {data !== null && (
          Object.keys(data).map((algo) =>
            <div className="algo-a-day">
              <div className={styles.date}>{algo}</div>
              <div className={styles.date}>{data[algo][0]}</div>
              <div className={styles.code}>{data[algo][1]}</div>
              <div className={styles.date}>{data[algo][2]}</div>
              <div className={styles.code}>{data[algo][3]}</div>
            </div>
          )
      )}
    </div>
  )
};

export default Algorithms