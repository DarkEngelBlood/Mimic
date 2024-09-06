import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  getFirestore,
  getDoc, doc
} from "firebase/firestore"
import ItemDetail from "./ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const refDoc = doc(db, "items", id)

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id })
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return "wait"

  return (
    <ItemDetail item={item} />
  )
}