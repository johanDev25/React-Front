import {
  FIND_FILM,
  ADD_FILM,
  DATE_FILTER,
  INCREASE_BOOK,
  VALIDATE_FILM,
  DELETE_FILM
} from '../../types'

export default (state,action) => {
  switch(action.type) {
    case DATE_FILTER:
    case FIND_FILM:
    return {
      ...state,
      movies: action.payload
    }
    case ADD_FILM:
    return{
      ...state,
      movies: [action.payload, ...state.movies ],
      errorform: false
    }
    case VALIDATE_FILM:
    return{
      ...state,
      errorform: true
    }
    case INCREASE_BOOK:
    return{
      ...state,
     movies: state.movies.map(movie => movie.id === action.payload.id ? action.payload : movie )
    }
    case DELETE_FILM:
    return{
      ...state,
      movies: state.movies.filter(movie => movie.id !== action.payload),
      movie: null
    }

    default:
    return state;
  }
}
