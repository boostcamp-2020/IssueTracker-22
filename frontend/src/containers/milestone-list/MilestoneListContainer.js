import React from 'react';
import styled from 'styled-components';
import NavBar from '@components/NavBar';
import NewButton from '@components/NewButton';
import useMilestones from '@lib/useMilestones';
import pathUri from '@constants/path';
import MilestoneList from './components/MilestoneList';

const NavBarBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const MilestoneListContainer = () => {
  const milestones = useMilestones();

  const handleClick = () => {
    window.location.href = `/#${pathUri.createMilestone}`;
  };

  return (
    <>
      <NavBarBox>
        <NavBar/>
        <NewButton onClick={handleClick}>New milestone</NewButton>
      </NavBarBox>
      <MilestoneList milestones={milestones}/>
    </>
  );
};

export default MilestoneListContainer;
