import React, { useReducer } from 'react';

import bookContext from './bookContext';
import bookReducer from './bookReducer';

import clienteAxios from '../../config/axios';

import * as moment from 'moment';

import {
  FIND_BOOK,
  ADD_BOOK,
  DATE_BOOK,
  FILM_NAME,
  FILM_DATE,
  VALIDATE_BOOK,
  DELETE_BOOK
 } from '../../types'

  const BookState = props => {

    const initialState = {
      books :[],
      date: false,
      errorform : false,
      book : null,
      fname: null,
      dname: null
    }

    const [state, dispatch] = useReducer(bookReducer, initialState)
    const findbooks = async () => {
      try {
        const response = await clienteAxios.get('/api/v1/books');
        dispatch({
          type: FIND_BOOK,
          payload: response.data
        })
      } catch (e) {
          console.log(e);
      }
    }

    const addbook = async book => {
      try {
        const response = await clienteAxios.post('/api/v1/books', book)
        dispatch({
          type: ADD_BOOK,
          payload: response.data
        })
      } catch (e) {
        console.log(e);
      }
    }

    const filterdate = async (start_date, end_date) => {
      try {
        const Sdate = moment(start_date).format("YYYY-MM-DD");
        const Edate = moment(end_date).format("YYYY-MM-DD");
        const response = await clienteAxios.get(`/api/v1/books?start=${Sdate}&end=${Edate}`);
        dispatch({
          type: DATE_BOOK,
          payload: response.data
        })
      } catch (e) {
        console.log(e);
      }
    }

    const showerrorb = () => {
      dispatch({
        type: VALIDATE_BOOK
      })
    }

    const filmname = (title) => {
      dispatch({
        type: FILM_NAME,
        payload: title
      })
    }

    const filmdate = (date) => {
      dispatch({
        type: FILM_DATE,
        payload: date
      })
    }

    const deletebook = async (id) => {
      try {
        await clienteAxios.delete(`/api/v1/books/${id}`)
        dispatch({
          type: DELETE_BOOK,
          payload: id
        })
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <bookContext.Provider
        value={{
          books : state.books,
          date : state.date,
          errorform : state.errorform,
          book : state.book,
          fname : state.fname,
          dname : state.dname,
          findbooks,
          addbook,
          filterdate,
          showerrorb,
          filmname,
          filmdate,
          deletebook
        }}
        >
        {props.children}
      </bookContext.Provider>

    )
  }

  export default BookState;
