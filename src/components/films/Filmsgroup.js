import React, {Fragment, useState, useContext, useEffect} from 'react'
import filmContext from '../../context/films/filmContext'
import bookContext from '../../context/books/bookContext'

const Filmsgroup = () => {

  const moviesContext = useContext(filmContext);
  const {movies, findfilms, increase, deletefilm} = moviesContext;

  const booksContext = useContext(bookContext);
  const {fname, errorform, dname, filmname, filmdate, addbook, showerrorb} = booksContext;

  useEffect( () => {

    findfilms();
    // eslint-disable-next-line
  }, [])

  const [booking, setBooking] = useState({
    name: '',
    cel: '',
    id_user: '',
    email: '',
    film: '',
    date: ''
  });

  const {name, cel, id_user, email} = booking

  const onChangeBook = e => {
    setBooking({
      ...booking,
      [e.target.name] : e.target.value,
      film : fname,
      date : dname
    })
  }

  const onSubmitbook = e => {
    e.preventDefault()

    if (name.trim() === '', cel.trim() === '', id_user.trim() === '', email.trim() === '') {
      showerrorb()
      return;
    }

    addbook(booking);

    setBooking({
      name: '',
      id_user: '',
      email: '',
      cel: '',
      film: '',
      date: ''
    })
  }

  if(movies.length === 0 ) return <p>No hay peliculas crea una</p>;

    return (
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-3 mt-5">
            <div className="card" style={{ width: '18rem' }} key={movie.id}>
              <img src={movie.url} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <Fragment>
                  {movie.booked !== 10 ?
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#bookFilm" onClick={ () =>{filmname(movie.title);filmdate(movie.date)} }>
                      Reservar
                    </button>
                    :
                    null
                  }
                  <div className="modal fade" id="bookFilm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Crea tu reserva</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={onSubmitbook}>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlNombre">Nombre:</label>
                                  <input type="text" className="form-control" placeholder="Tu Nombre" name="name" value={name} onChange={onChangeBook} />
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlNombre">Cedula:</label>
                                  <input type="text" className="form-control" placeholder="Cedula" name="id_user" value={id_user} onChange={onChangeBook} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlNombre">Email:</label>
                                  <input type="text" className="form-control" placeholder="Email" name="email" value={email} onChange={onChangeBook} />
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlNombre">Ceular:</label>
                                  <input type="text" className="form-control" placeholder="Celular" name="cel" value={cel} onChange={onChangeBook} />
                                </div>
                              </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={ () => increase(movie) }>Reservar</button>
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
                <a href="#!" className="btn btn-danger" onClick={ () => deletefilm(movie.id) }>Delete</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  export default Filmsgroup
