import React, { useReducer } from 'react';

import filmContext from './filmContext';
import filmReducer from './filmReducer';

import clienteAxios from '../../config/axios';

import * as moment from 'moment';

import {
  FIND_FILM,
  ADD_FILM,
  DATE_FILTER,
  INCREASE_BOOK,
  VALIDATE_FILM,
  DELETE_FILM
 } from '../../types'

  const FilmState = props => {

    const initialState = {
      movies :[],
      date: false,
      errorform : false,
      movie : null
    }

    const [state, dispatch] = useReducer(filmReducer, initialState)
    const findfilms = async () => {
      try {
        const response = await clienteAxios.get('/api/v1/films');
        dispatch({
          type: FIND_FILM,
          payload: response.data
        })
      } catch (e) {
          console.log(e);
      }
    }

    const addfilm = async movie => {
      try {
        const response = await clienteAxios.post('/api/v1/films', movie)
        dispatch({
          type: ADD_FILM,
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
        const response = await clienteAxios.get(`/api/v1/films?start=${Sdate}&end=${Edate}`);
        dispatch({
          type: DATE_FILTER,
          payload: response.data
        })
      } catch (e) {
        console.log(e);
      }
    }

    const showerror = () => {
      dispatch({
        type: VALIDATE_FILM
      })
    }

    const increase = async movie => {
      movie.booked += 1
      try {
        const response = await clienteAxios.put(`/api/v1/films/${movie.id}`, movie);
        dispatch({
          type: INCREASE_BOOK,
          payload: response.data
        })
      } catch (e) {
        console.log(e);
      }
    }

    const deletefilm = async (id) => {
      try {
        await clienteAxios.delete(`/api/v1/films/${id}`)
        dispatch({
          type: DELETE_FILM,
          payload: id
        })
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <filmContext.Provider
        value={{
          movies : state.movies,
          date : state.date,
          errorform : state.errorform,
          movie : state.movie,
          findfilms,
          addfilm,
          filterdate,
          showerror,
          increase,
          deletefilm
        }}
        >
        {props.children}
      </filmContext.Provider>

    )
  }

  export default FilmState;
