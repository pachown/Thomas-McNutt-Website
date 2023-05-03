import styles from '../styles/Algos.module.css'
//import algoData from '../algorithms.js'
import React, { useState, useEffect } from 'react'
import PrismAsyncLight from 'react-syntax-highlighter'

const Algorithms = ({ children }) => {
  const [data, setData] = useState(null);

//  useEffect(() => {
  //  setData(algoData);
 // }, [])

  return (
    <div className={styles.algos}>
      <h1 className={styles.blog}><em>Welcome to my algorithm blog!</em></h1>
      <h2 className={styles.blog2}><em> First the question, then my solution, and then my results according to the website</em></h2>
   
    </div>
  )
};

export default Algorithms
