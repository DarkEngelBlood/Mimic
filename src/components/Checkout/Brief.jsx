import React from 'react'
import { Link } from 'react-router-dom'

const Brief = ({ orderId }) => {
  return (
    <div>
      <h1>Gracias por tu compra!</h1>
      <h2>El ID de tu orden es: {orderId}</h2>
      <Link to={'/'}>Volver al inicio</Link>
    </div>
  )
}

export default Brief