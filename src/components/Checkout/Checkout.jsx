import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore'
import { CartContext } from '../../contexts/CartContext'
import Brief from './Brief'


const Checkout = () => {
  // Estado para almacenar los datos del formulario
  const [userData, setUserData] = useState(null)

  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [procesado, setProcesado] = useState(false)
  const { items, reset } = useContext(CartContext)

  useEffect(() => {
    if (userData) {
      const db = getFirestore()
      const ordersRef = collection(db, "orders")
      const newOrder = {
        buyer: userData,
        items: items.map((item) => ({
          id: item.item.id,
          title: item.item.title,
          price: item.item.price,
          quantity: item.quantity
        })),
        date: Timestamp.fromDate(new Date()),
        total: items.reduce((acc, item) => acc + item.item.price * item.quantity, 0)
      }

      setLoading(true)

      addDoc(ordersRef, newOrder)
        .then((docRef) => {
          setOrderId(docRef.id)
          setProcesado(true)
          formik.resetForm() // Resetear formulario
          reset() // Vaciar carrito
        })
        .catch((err) => {
          console.error("Error al agregar el documento: ", err)
        })
        .finally(() => setLoading(false))
    }
  }, [userData])

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .required('El nombre es requerido'),
    email: Yup.string()
      .email('Formato de email inválido')
      .required('El email es requerido'),
    phone: Yup.string()
      .matches(/^\d+$/, 'El teléfono solo puede contener números')
      .min(10, 'El teléfono debe tener al menos 10 dígitos')
      .required('El teléfono es requerido')
  })

  // Inicializa Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    validationSchema,
    onSubmit: (values) => {
      // Guardar los datos del formulario en el estado
      setUserData(values)
    }
  })

  if (loading) return <h1>Procesando...</h1>
  if (procesado) return <Brief orderId={orderId} />

  return (
    <div div >
      <h2>Formulario de Checkout</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Nombre */}
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div style={{ color: 'red' }}>{formik.errors.phone}</div>
          ) : null}
        </div>

        {/* Botón de submit */}
        <button type="submit">Realizar Compra</button>
      </form>
    </div>
  )
}

export default Checkout
