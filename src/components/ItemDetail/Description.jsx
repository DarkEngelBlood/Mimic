import React from 'react'
import styles from './Description.module.css'
const Description = ({ item }) => {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>{item.title}</h1>
      <h2 className={styles.h2}>{item.description}</h2>
      <h3 className={styles.h3}>{item.categoryId}</h3>
      <p className={styles.p}>${item.price}</p>
      <p className={styles.p}>Stock: {item.stock}</p>
    </div>
  )
}

export default Description