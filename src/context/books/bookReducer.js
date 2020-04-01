import {
  FIND_BOOK,
  ADD_BOOK,
  DATE_BOOK,
  FILM_NAME,
  FILM_DATE,
  VALIDATE_BOOK,
  DELETE_BOOK
} from '../../types'

export default (state,action) => {
  switch(action.type) {
    case DATE_BOOK:
    case FIND_BOOK:
    return {
      ...state,
      books: action.payload
    }
    case ADD_BOOK:
    return{
      ...state,
      books: [action.payload, ...state.books ],
      errorform: false,
      fname: null,
      dname: null
    }
    case FILM_NAME:
    return{
      ...state,
      fname: action.payload
    }
    case FILM_DATE:
    return{
      ...state,
      dname: action.payload
    }
    case VALIDATE_BOOK:
    return{
      ...state,
      errorform: true
    }
    case DELETE_BOOK:
    return{
      ...state,
      books: state.books.filter(book => book.id !== action.payload),
      movie: null
    }

    default:
    return state;
  }
}
