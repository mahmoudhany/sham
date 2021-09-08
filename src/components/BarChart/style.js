import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 500px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-right: 10px;
`;

export const Chart = css`
  margin-top: 10px;
  width: 20px;
  
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 20px;
  }
`;

export const MakeBar = styled.div`

  height: ${(props) => props.height < 100 ? props.height : props.height / 10}%;
  background-color: ${(props) => props.color};
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;

export const Title = styled.div`
padding: 5px;
margin-top: 10px;
display: flex;
align-items: center;
&:before{
  content: '';
  display: inline-block;
  background-color: red;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-color: ${(props) => props.color};
}
`
