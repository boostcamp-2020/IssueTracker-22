import React from 'react';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Header from '../components/Header';
import MilestoneListContainer from '../containers/milestone-list/MilestoneListContainer';

const MilestoneList = () => (
  <>
    <GlobalStyle/>
    <Header/>
    <MilestoneListContainer/>
  </>
);

export default MilestoneList;
