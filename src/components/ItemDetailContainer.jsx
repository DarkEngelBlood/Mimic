import styles from "./ItemDetailContainer.module.css";
import data from "../data/products.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        const finded = response.find((i) => i.id === Number(id));
        setItem(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "wait";

  return (
    <div className={styles.container}>
      <div className={styles.inside}>
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
        <h3>{item.category}</h3>
        <p>${item.price}</p>
        <img src={item.pictureUrl} height={300} width={300}/>
      </div>
    </div>
  );
};
