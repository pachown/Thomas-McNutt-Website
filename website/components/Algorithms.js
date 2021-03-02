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
          Object.keys(data).map((algo, i) =>
            <div className="algo-a-day">
              <div>{`Day ${i+1}`}</div>
              <div>{data[algo][0]}</div>
              <div>{data[algo][1]}</div>
              <div>{data[algo][2]}</div>
              <div>{data[algo][3]}</div>
            </div>
          )
      )}
    </div>
  )
};

export default Algorithms