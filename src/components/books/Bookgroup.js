import React, { useContext, useEffect} from 'react'
import bookContext from '../../context/books/bookContext'

const Bookgroup = () => {

  const booksContext = useContext(bookContext);
  const {books, findbooks, deletebook} = booksContext;

  useEffect( () => {

    findbooks();
    // eslint-disable-next-line
  }, [])

  if(books.length === 0 ) return <p>No hay registros</p>;

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Pelicula</th>
            <th scope="col">NombreReservante</th>
            <th scope="col">CorreoElectronico</th>
            <th scope="col">Cedula</th>
            <th scope="col">Celular</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <th scope="row">{book.film}</th>
              <th>{book.name}</th>
              <td>{book.cel}</td>
              <td>{book.id_user}</td>
              <td>{book.email}</td>
              <td><a href="#!" className="btn btn-danger" onClick={ () => deletebook(book.id) }>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    )
  }

  export default Bookgroup
