import styles from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const ref = !id ? collection(db, "items") : query(collection(db, "items"), where("categoryId", "==", id));

    getDocs(ref)
      .then((snapshot) => {
        setItem(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "wait";

  return (
    <div className={styles.container}>
      {item.map((i) => (
        <div key={i.id} className={styles.inside}>
          <h1 className={styles.title}>{i.title}</h1>
          <h2 className={styles.h2}>{i.description}</h2>
          <h3 className={styles.h3}>{i.categoryId}</h3>
          <img src={i.imageId} height={300} width={300} />
          <Link to={`/item/${i.id}`} className={styles.link}>
            Ver
          </Link>
        </div>
      ))}
    </div>
  );
};
