import { Link } from 'react-router-dom'
import styles from './ItemList.module.css'

// Se encarga de mostrar los items obtenidos de la base de datos
const ItemList = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.map((i) => (
        <Item key={i.id} i={i} />
      ))}
    </div>
  )
}

// Se encarga de renderizar cada item
const Item = ({ i }) => {
  return (
    <div className={styles.item}>
      <img src={i.imageId} alt={i.title} className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.title}>{i.title}</h1>
        <h2 className={styles.description}>{i.description}</h2>
        <h3 className={styles.category}>{i.categoryId}</h3>
        <Link to={`/item/${i.id}`} className={styles.link}>
          Ver
        </Link>
      </div>
    </div>
  )
}

export default ItemList
