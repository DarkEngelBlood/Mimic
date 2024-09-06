import { createContext, useState } from "react"

export const CartContext = createContext()

export const Provider = ({ children }) => {

  /**
   * Estado que contiene los items del carrito
   */
  const [items, setItems] = useState([])

  /**
   * Metodo disponible para resetear el carrito
   * @returns {void} No devuelve nada
   */
  const reset = () => setItems([])

  /**
   * Metodo disponible para agregar items al carrito
   * Si el item ya esta en el carrito, se actualiza la cantidad
   * Si el item no esta en el carrito, se agrega
   * @param {*} item Item a agregar
   * @param {*} quantity Cantidad a agregar
   */
  const addItem = (item, quantity) => {
    const existe = items.some((i) => i.item.id === item.id)

    if (existe) {
      // Si ya está en el carrito, actualizamos la cantidad
      const newItems = [...items]
      const index = newItems.findIndex((i) => i.item.id === item.id)
      newItems[index].quantity += quantity
      setItems(newItems)
    } else {
      // Si no está en el carrito, lo agregamos con su cantidad
      console.log([...items, { item, quantity }])
      setItems([...items, { item, quantity }])
    }
  }

  /**
   * Metodo disponible para contar la cantidad total de items en el carrito
   * @returns {number} Cantidad total de items en el carrito
   */
  const countItems = () => items.reduce((acc, item) => acc + item.quantity, 0)

  /**
   * Metodo disponible para eliminar un producto especifico del carrito
   * @param {*} id Item a eliminar
   * @returns {void} No devuelve nada
   */
  const removeItem = (id) => {
    const newItems = items.filter((i) => i.item.id !== id)
    setItems(newItems)
  }

  const metodosExportados = {
    items,
    addItem,
    countItems,
    reset,
    removeItem
  }

  return (
    <CartContext.Provider value={metodosExportados}>
      {children}
    </CartContext.Provider>
  )
}
