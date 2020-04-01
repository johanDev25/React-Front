import React from 'react'
import Sidebar from '../layout/Sidebar'
import Bookgroup from './Bookgroup'

const Booking = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
     <div className="seccion-principal">
       <h1>Reservas</h1>
      <main>
        <div className="films">
          <Bookgroup />
        </div>
      </main>
     </div>
    </div>
  )
}

export default Booking
