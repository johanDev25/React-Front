import React from 'react'
import Sidebar from '../layout/Sidebar'
import Filmsgroup from './Filmsgroup'
import Newfilm from './Newfilm'
import Filterfilm from './Filterfilm'

const Films = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <header className="masthead mb-auto">
          <h1>Peliculas</h1>
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
              <div>
              <button className="btn btn-primary mr-5" type="button"><Newfilm /></button>
              </div>
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Filtrar por fecha
              </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
              <Filterfilm />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="films">
          <Filmsgroup />
        </div>
      </main>
    </div>
  </div>
)
}

export default Films
