import React, { useContext, useEffect } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { getQuestions, getReviews } from '../../utilities';
import { AppContext } from '../../context';

export default function Pickers() {
  const {
    handleFromDateChange,
    handleToDateChange,
    setLoading,
    currentDate,
    fromDate,
    toDate,
    fetchedReviews,
    fetchedQuestions
  } = useContext(AppContext)

  useEffect(() => {
    setLoading(true)

    getReviews(fromDate.slice(0, 10), toDate.slice(0, 10))
      .then(data => data && fetchedReviews(data))

    getQuestions().then(data => data && fetchedQuestions(data))
    setLoading(false)
  },
    [fromDate, toDate, setLoading]
  )

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-evenly">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-from"
          label="From"
          maxDate={toDate}
          format="yyyy-MM-dd"
          value={fromDate}
          onChange={handleFromDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-to"
          label="To"
          maxDate={currentDate}
          format="yyyy-MM-dd"
          value={toDate}
          onChange={handleToDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
