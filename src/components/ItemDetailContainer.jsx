import styles from "./ItemDetailContainer.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDoc, doc
} from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  /*   useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        const finded = response.find((i) => i.id === Number(id));
        setItem(finded);
      })
      .finally(() => setLoading(false));
  }, [id]); */

  if (loading) return "wait";

  return (
    <div className={styles.container}>
      <div className={styles.inside}>
        <h1 className={styles.title}>{item.title}</h1>
        <h2 className={styles.h2}>{item.description}</h2>
        <h3 className={styles.h3}>{item.categoryId}</h3>
        <p className={styles.p}>${item.price}</p>
        <p className={styles.p}>Stock: {item.stock}</p>
        <img src={item.imageId} height={300} width={300} />
      </div>
    </div>
  );
};
