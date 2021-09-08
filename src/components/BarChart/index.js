import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context'
import _ from 'lodash';
import { BarChartContainer, BlackLine, Container, MainContainer, MakeBar, Number } from './style';

function BarChart() {
  const { chartData } = useContext(AppContext)

  const __DATA__ = [
    { distance: 13, colors: ["#ffd847", "#e0a106"] },
    { distance: 20, colors: ["#ff47ab", "#e0064e"] },
    { distance: 16, colors: ["#add9c0", "#1da890"] },
    { distance: 30, colors: ["#cbd9ad", "#7ca81d"] },
    { distance: 22, colors: ["#d9c1ad", "#714511"] },
  ];

  const prepareData = () => {
    const byDate = _.groupBy(chartData, 'date')
    console.log(byDate)

    const byQ = _.groupBy(chartData, 'question')
    console.log(byQ)
    // for (const key in byDate) {
    //   console.log(byDate[key])
    // }

  }
  return (
    <Container>
      {/* <BlackLine /> */}
      {prepareData()}
      {

        <MainContainer>
          {__DATA__.map(({ distance }, i) => {
            return (
              <BarChartContainer key={i}>
                {/* <Number color={'red'}>{distance} km</Number> */}
                <MakeBar height={distance * 2} color={'red'} />
                <MakeBar height={distance * 2} color={'green'} />
              </BarChartContainer>
            );
          })}
        </MainContainer>
      }
      <BlackLine />

    </Container>
  )
}

export default BarChart
