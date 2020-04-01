import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <h1>Place<span>it</span></h1>
      <div className="links">
        <ul className="listado">
        <li>
          <Link to={'/'} >
            Peliculas
          </Link>
        </li>
        <li>
          <Link to={'/reservas'} >
            reservaciones
          </Link>
        </li>
      </ul>
      </div>
    </aside>
  )
}

export default Sidebar
