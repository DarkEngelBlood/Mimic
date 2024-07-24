import styles from './ItemListContainer.module.css'

export const ItemListContainer = (props) => {
  return <h1 className={styles.list}>{props.greeting}</h1>;
};
