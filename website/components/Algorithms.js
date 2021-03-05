import styles from '../styles/Layout.module.css'
import algoData from '../algorithms.js'
import React, { useState, useEffect } from 'react'
import PrismAsyncLight from 'react-syntax-highlighter'

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
              <div className={styles.date}> {algo}</div>
              <div className={styles.algoinfo}>Prompt: {data[algo][0]}</div>
              <PrismAsyncLight
              language="javascript">
                {data[algo][1]}
              </PrismAsyncLight>
              <div className={styles.algoinfo}>Result: {data[algo][2]}</div>
              <PrismAsyncLight
              language="javascript">
               {data[algo][3]}
              </PrismAsyncLight>
            </div>
          )
      )}
    </div>
  )
};

export default Algorithms