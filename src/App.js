import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Films from './components/films/Films';
import Booking from './components/books/Booking';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import FilmState from './context/films/filmState';
import BookState from './context/books/bookState';

function App() {
  return (
    <BookState>
      <FilmState>
    <Router>
      <Switch>
        <Route exact path="/" component={Films} />
        <Route exact path="/reservas" component={Booking} />
      </Switch>
    </Router>
    </FilmState>
  </BookState>
  );
}

export default App;
