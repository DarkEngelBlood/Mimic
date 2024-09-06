import React from 'react'
import { ClipLoader } from 'react-spinners'
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <ClipLoader color="#000" size={60} />
    </div>
  )
}

export default LoadingScreen