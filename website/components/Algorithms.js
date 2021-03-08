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
        <h2 className="algo-a-day">
        <em>Welcome to my algorithm a day blog!</em></h2>
        <h2><em> I list the prompt, my solution, and the results from the Leetcode solution. This will help me keep a record of my toy problem improvement over time.</em>
          </h2>
      {data !== null && (
          Object.keys(data).map((algo) =>
            <div className={styles.algoaday}>
              <div className={styles.date}> {algo}</div>
              <div className={styles.algoinfo}>Prompt: {data[algo][0]}</div>
              <PrismAsyncLight
              language="javascript">
                {data[algo][1]}
              </PrismAsyncLight>
              <div className={styles.algoinfo}>Result: {data[algo][2]}</div>
            </div>
          )
      )}
    </div>
  )
};

export default Algorithms