import React from 'react';
import ContentBox from '@components/ContentBox';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Header from '../components/Header';
import MilestoneListContainer from '../containers/milestone-list/MilestoneListContainer';

const MilestoneList = () => (
  <>
    <GlobalStyle/>
    <Header/>
    <ContentBox>
      <MilestoneListContainer/>
    </ContentBox>
  </>
);

export default MilestoneList;
