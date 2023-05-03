import styles from '../styles/Algos.module.css'
import algoData from '../algorithms.js'
import React, { useState, useEffect } from 'react'
import PrismAsyncLight from 'react-syntax-highlighter'

const Algorithms = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(algoData);
  }, [])

  return (
    <div className={styles.algos}>
      <h1 className={styles.blog}><em>Welcome to my algorithm blog!</em></h1>
      <h2 className={styles.blog2}><em> First the question, then my solution, and then my results according to the website</em></h2>
      //{data && (
        //Object.keys(data).map((algo) =>
          //<div className={styles.algoaday}>
            //<div className={styles.problem}>Problem: {algo}</div>
            //<div className={styles.language}>Language: {data[algo][3]}</div>
            //<div className={styles.algoinfo}><em>Prompt:</em> {data[algo][0]}</div>
            //<PrismAsyncLight
             // language="javascript">
              //{data[algo][1]}
            //</PrismAsyncLight>
            //<div className={styles.algoinfo}>Result: {data[algo][2]}</div>
            //<div className={styles.container1}>
             // <div className={styles.chevron}></div>
              //<div className={styles.chevron}></div>
              //<div className={styles.chevron}></div>
            //</div>
          //</div>
    </div>
  )
};

export default Algorithms
