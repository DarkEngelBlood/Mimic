import { Link } from 'react-router-dom'
import styles from "./ItemList.module.css"

// Se encarga de mostrar los items obtenidos de la base de datos
const ItemList = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.map((i, index) => (
        <Item key={index} i={i} />
      ))}
    </div>
  )
}

// Se encarga de renderizar cada item
const Item = ({ i }) => {
  return (
    <div key={i.id} className={styles.inside}>
      <h1 className={styles.title}>{i.title}</h1>
      <h2 className={styles.h2}>{i.description}</h2>
      <h3 className={styles.h3}>{i.categoryId}</h3>
      <img src={i.imageId} height={300} width={300} />
      <Link to={`/item/${i.id}`} className={styles.link}>
        Ver
      </Link>
    </div>
  )
}

export default ItemList