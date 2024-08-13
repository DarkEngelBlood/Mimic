import styles from "./ItemListContainer.module.css";
import data from "../data/products.json";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        if (!id) {
          setItem(response);
        } else {
          const filtered = response.filter((i) => i.category === id);
          setItem(filtered);
        }
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
            <h3 className={styles.h3}>{i.category}</h3>
            <p className={styles.p}>${i.price}</p>
            <img src={i.pictureUrl} height={300} width={300} />
            <Link to={`/item/${i.id}`} className={styles.link}>Ver</Link>
        </div>
      ))}
    </div>
  );
};
