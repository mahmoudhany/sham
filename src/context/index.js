import React, { createContext, useCallback, useState } from 'react';
import { useEffect } from 'react';
import _ from 'lodash';

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const currentDate = new Date().toISOString()
  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, setToDate] = useState(currentDate);
  const [loading, setLoading] = useState(false)
  const [reviews, setReviews] = useState({})
  const [questions, setQuestions] = useState({})
  const [chartData, setChartData] = useState(null)

  const handleFromDateChange = (date) => {
    setFromDate(date.toISOString());
  }
  const handleToDateChange = (date) => {
    setToDate(date.toISOString());
  }

  const fetchedQuestions = (questions) => {
    const result = {}
    for (const question of questions) {
      result[question.id] = question.choices
    }
    setQuestions(result)
  }
  const getWeight = (status) => {
    if (status === 'Good') return 1;
    if (status === 'Neutral') return 0;
    return -1;
  }

  const fetchedReviews = ({ reviews }) => {
    // console.log('questions', questions);
    if (reviews) {
      const data = reviews.reduce((arr, { answers, submitted_at }) => {
        return arr.concat([
          ...answers.filter(a => a.question === 2 || a.question === 4).map(answer => {
            const list = questions[answer.question].filter(x => x.id === answer.choice);
            return {
              ...answer,
              date: new Date(submitted_at).toISOString().slice(0, 7),
              weight: list.length !== 0 ? getWeight(list[0].text) : 0
            }
          })
        ]);
      }, []);
      // console.log('data', data);
      setChartData(data)
    }
  }

  function calcDate(date1, date2) {

    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    return months
  }

  const formatDataForChart = useCallback(() => {
    let monthsCount = calcDate(new Date(toDate), new Date(fromDate))
    const uniqueMonths = new Set()

    for (const key in reviews) {
      uniqueMonths.add(key.slice(0, 7))
    }
    return {
      monthsCount: monthsCount
    }
  }
    , [fromDate, reviews, toDate])

  const value = {
    handleFromDateChange,
    handleToDateChange,
    setLoading,
    currentDate,
    fromDate,
    toDate,
    loading,
    fetchedReviews,
    fetchedQuestions,
    reviews,
    questions,
    formatDataForChart,
    chartData
  }

  useEffect(() => {
    formatDataForChart()
  }, [formatDataForChart])

  return (
    <AppContext.Provider value={value}>
      {children}
      {/* {formatDataForChart()} */}
    </AppContext.Provider>
  );
};

export default AppProvider;


// bottom get submited at 
// left average 

//  get choice from reviews and get question 


