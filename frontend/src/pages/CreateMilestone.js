import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import GlobalStyle from '@assets/styles/GlobalStyle';
import Header from '@components/Header';
import ContentBox from '@components/ContentBox';
import userContext from '@lib/userContext';
import pathUri from '@constants/path';
import MilestoneFormContainer from '@containers/milestone-form/MilestoneFormContainer';

const CreateMilestone = () => {
  const user = useContext(userContext);

  if (!user) return <Redirect to={pathUri.home}/>;

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <ContentBox>
        <MilestoneFormContainer />
      </ContentBox>
    </>
  );
};

export default CreateMilestone;
