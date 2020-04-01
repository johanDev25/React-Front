import React, {Fragment, useState, useContext} from 'react'
import filmContext from '../../context/films/filmContext'

const Newfilm = () => {

  const moviesContext = useContext(filmContext);
  const {errorform, addfilm, showerror} = moviesContext;

  const [film, setFilm] = useState({
    title: '',
    plot: '',
    url: '',
    date: '',
    booked: ''
  });

  const {title, plot, url, date} = film

  const onChangeFilm = e => {
    setFilm({
      ...film,
      [e.target.name] : e.target.value,
      booked: 0
    })
  }

  const onSubmitfilm = e => {
    e.preventDefault()
    if (title.trim() === '', plot.trim() === '', url.trim() === '', date === '') {
      showerror()
      return;
    }

    addfilm(film);

    setFilm({
      title: '',
      plot: '',
      url: '',
      date: '',
      booked: ''
    })
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createFilm">
        Crear Pelicula
      </button>

      <div className="modal fade" id="createFilm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Crea tu pelicula</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmitfilm}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlNombre">Nombre:</label>
                  <input type="text" className="form-control" id="exampleFormControlNombre" placeholder="Nombre de la pelicula" name="title" value={title} onChange={onChangeFilm}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSinopsis">Sinopsis:</label>
                  <input type="text" className="form-control" id="exampleFormControlSinopsis" placeholder="Sinopsis de la pelicula" name="plot" value={plot} onChange={onChangeFilm}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlURL">URL:</label>
                  <input type="text" className="form-control" id="exampleFormControlURL" placeholder="URL imagen" name="url" value={url} onChange={onChangeFilm}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFecha">Fecha Estreno</label>
                  <input type="date" className="form-control" id="exampleFormControlFecha" name="date" value={date} onChange={onChangeFilm}/>
                </div>
                  <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
              { errorform
              ?
              <p className="error">Todos los campos son obligatorios</p>
              :
               null
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Newfilm
