import React from 'react';
import styled from 'styled-components';
import {counts } from "../utils/data.js"
import CountsCard from '../components/cards/CountsCards';
import WeeklyStat from '../components/cards/WeeklystatCard';
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Flexwrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  padding: 0px 16px;
 justify-content:space-between;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const DashBoard = (data) => {



  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
      <Flexwrap>
  {counts.map((item)=>(<CountsCard item = {item}/>))}
</Flexwrap>


<Flexwrap>

  <WeeklyStat data={data}></WeeklyStat>
</Flexwrap>
      </Wrapper>
    </Container>
  );
};

export default DashBoard;
