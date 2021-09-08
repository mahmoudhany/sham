import axios from "axios";

export const getReviews = async (from, to) => {
  const currentDate = new Date().toISOString().slice(0, 10)

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  }
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_END_POINT}/branches/1/progress?date_from=${from ?? currentDate}&date_to=${to ?? currentDate}`,
      config
    )
    if (response.data) {
      return {
        reviews: response.data.line_chart_data
      }
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const getQuestions = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_END_POINT}/questions`)

    return data.map(({ questions }) => {
      return questions.filter(question => question.id === 2 || question.id === 4)
    })[0]

  } catch (error) {
    console.log(error.message)

    // return { error: error.message }
  }
}
