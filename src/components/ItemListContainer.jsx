import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore"
import ItemList from "./ItemList"

// Se encarga de obtener los items de la base de datos
export const ItemListContainer = () => {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const ref = !id ? collection(db, "items") : query(collection(db, "items"), where("categoryId", "==", id))

    getDocs(ref)
      .then((snapshot) => {
        setItem(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
        )
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return "wait"
  return (
    <ItemList item={item} />
  )
}
