import React from 'react'
import styles from './ItemQuantitySelector.module.css'

const ItemQuantitySelector = ({ stock, onAdd }) => {

  const [count, setCount] = React.useState(1)

  const handleIncrease = () => {
    if (count < stock) setCount((prev) => prev + 1)
  }

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <button className={styles.button} onClick={handleDecrease}>-</button>
        <span className={styles.counter}>{count}</span>
        <button className={styles.button} onClick={handleIncrease}>+</button>
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.buttonAdd} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemQuantitySelector