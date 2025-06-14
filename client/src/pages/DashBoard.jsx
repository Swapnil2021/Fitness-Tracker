import React from 'react';
import styled from 'styled-components';
import {counts } from "../utils/data.js"
import CountsCard from '../components/cards/CountsCards';
import WeeklyStat from '../components/cards/WeeklystatCard';
import CategoryChart from '../components/cards/CategoryChart';
import AddWorkout from '../components/AddWorkout.jsx';
import WorkoutCard from '../components/cards/Workoutcard'

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
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const Flexwrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const DashBoard = () => {
const [workout ,setWorkout] = React.useState("")

const data = {
  totalCaloriesBurnt:13500,
  totalWorkouts:6,
  avgCaloriesBurntPerWorkout:2250,
  totalWeeksCaloriesBurnt: {
    weeks:["17th","18th","19th","20th","21st"],
    caloriesBurned:[2000, 2500, 3000, 2200, 2700],
    
  },
  pieChartData:[{
    id :1,
    value:2522,
    label:"legs",
  },
  {
    id :2,
    value:1500,
    label:"arms",
  },
  {
    id :3,
    value:1800,
    label:"chest",
  }
  ]
}

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
      <Flexwrap>
  {counts.map((item)=>(<CountsCard item = {item} data ={data}/>))}
</Flexwrap>

<Flexwrap>

  <WeeklyStat data={data}></WeeklyStat>
   <CategoryChart data={data}></CategoryChart>
   <AddWorkout workout ={workout} setWorkout ={setWorkout}></AddWorkout>
</Flexwrap>

<Section >
  <Title >
    Todays Workouts
  </Title>
  <CardWrapper>
<WorkoutCard></WorkoutCard>
<WorkoutCard></WorkoutCard>
<WorkoutCard></WorkoutCard>

  </CardWrapper>
</Section>



      </Wrapper>
    </Container>
  );
};

export default DashBoard;
