import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Brief.module.css'

const Brief = ({ orderId }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Gracias por tu compra!</h1>
      <h2 className={styles.orderId}>El ID de tu orden es: {orderId}</h2>
      <Link to={'/'} className={styles.link}>Volver al inicio</Link>
    </div>
  )
}

export default Brief
