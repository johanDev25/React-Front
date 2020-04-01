import React, {useState, useContext} from 'react'
import filmContext from '../../context/films/filmContext'

import { DateRange } from 'react-date-range';

const Filterfilm = () => {
  const moviesContext = useContext(filmContext);
  const {filterdate} = moviesContext;

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const onChangeDate = item => {
    setState([item.selection])
    if (item.selection.endDate !== '') {
      filterdate(item.selection.startDate, item.selection.endDate )
    }
  }

  return (
    <DateRange
      editableDateInputs={true}
      onChange={item => onChangeDate(item)}
      moveRangeOnFirstSelection={false}
      ranges={state}
      />
  )
}

export default Filterfilm
