import ItemQuantitySelector from './ItemQuantitySelector'
import styles from "./ItemDetail.module.css"
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Description from './Description'

const ItemDetail = ({ item }) => {

  //Acceder a CartContext
  const { addItem } = useContext(CartContext) // Invocamos algunas funciones exportadas por el contexto ItemsContext
  const onAdd = (count) => {
    addItem(item, count)
    alert(`Se agregaron ${count} productos del item '${item.title}' al carrito`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={item.imageId} height={300} width={300} />
      </div>
      <div className={styles.boxContainer}>
        <Description item={item} />
        <ItemQuantitySelector stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail