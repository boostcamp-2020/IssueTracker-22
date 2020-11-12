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

const ContentBox = styled.div`
    padding: 10px 50px;
`;

const MilestoneListContainer = () => {
  const milestones = useMilestones();

  const handleClick = () => {
    window.location.href = `/#${pathUri.createMilestone}`;
  };

  return (
    <ContentBox>
      <NavBarBox>
        <NavBar/>
        <NewButton handleClick={handleClick}>New milestone</NewButton>
      </NavBarBox>
      <MilestoneList milestones={milestones}/>
    </ContentBox>
  );
};

export default MilestoneListContainer;
