import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context'
import _ from 'lodash';
import { BarChartContainer, BlackLine, Container, MainContainer, MakeBar, Number, Title } from './style';
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
    const byDate = _.groupBy(chartData, 'date');
    console.log('byDate', byDate);
    const months = [];
    const values = [];
    Object.keys(byDate).map(key => {
      months.push(key);
      let q1w = 0;
      let q2w = 0;
      byDate[key].filter((q) => {
        if (q.question === 2) q1w = q1w + q.weight;
        if (q.question === 4) q2w = q2w + q.weight;
      });
      values.push([q1w < 0 ? 0 : q1w, q2w < 0 ? 0 : q2w]);
    });
    return {
      months,
      values
    }
  }
  return (
    <Container>
      {
        <MainContainer>
          {
            prepareData().values.map((val, index) => (
              <BarChartContainer >
                <span
                  style={{
                    position: 'absolute', bottom: 100, color: '#000', fontSize: 6, transform: 'rotate(-40deg)', minWidth: 60
                  }}>{prepareData().months[index]}
                </span>
                <MakeBar height={val[0]} color={'#bdc3c7'} />
                <MakeBar height={val[1]} color={'#9b59b6'} />
              </BarChartContainer>
            ))
          }
        </MainContainer>
      }
      <BlackLine />
      <br />
      <br />
      <br />
      <Title color={'#bdc3c7'}>Reception and admission were</Title>
      <Title color={'#9b59b6'}>The medical care you received was</Title>
    </Container>
  )
}

export default BarChart
