import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import styles from './Cart.module.css'

const Cart = () => {
  const { items, reset, removeItem } = useContext(CartContext)

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.item.price * item.quantity, 0)
  }

  if (items.length === 0) {
    return <h1>No hay items en el carrito</h1>
  }

  return (
    <div className={styles.cartContainer}>
      {items.map((item) => (
        <div key={item.item.id} className={styles.cartItem}>
          <img src={item.item.imageId} alt={item.item.title} className={styles.cartItemImage} />
          <div className={styles.cartItemDetails}>
            <h2 className={styles.cartItemTitle}>{item.item.title}</h2>
            <p className={styles.cartItemQuantity}>Cantidad: {item.quantity}</p>
          </div>
          <button
            className={styles.removeButton}
            onClick={() => removeItem(item.item.id)}
          >
            Eliminar del carrito
          </button>
        </div>
      ))}
      <div className={styles.totalContainer}>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
      <div className={styles.cartActions}>
        <button className={styles.resetButton} onClick={reset}>Vaciar carrito</button>
        <Link to={'/checkout'} className={styles.checkoutButton}>
          Finalizar compra
        </Link>
      </div>
    </div>
  )
}

export default Cart
