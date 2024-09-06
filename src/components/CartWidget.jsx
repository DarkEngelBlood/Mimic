import { useContext, useEffect, useState } from 'react'
import cart from "../assets/cart2.png"
import styles from "./CartWidget.module.css"
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { items, countItems } = useContext(CartContext)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(countItems)
  }, [items])

  return (
    <Link to={'/cart'} className={styles.link}>
      <img src={cart} alt="Carrito de compras" className={styles.cart} />
      <span className={styles.span}>{count}</span>
    </Link>
  )
}
