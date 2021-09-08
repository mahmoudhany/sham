import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background: #000; */
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

export const Number = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.color};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-color: ${props => props.color};
  margin-right: 5px;
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
