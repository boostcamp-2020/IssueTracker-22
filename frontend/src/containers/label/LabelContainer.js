import React from 'react';
import styled from 'styled-components';
import NavBar from '@components/NavBar';
import NewButton from '@components/NewButton';
import useLabels from '@lib/useLabels';
import LabelList from './components/LabelList';
import LabelForm from './components/LabelForm';

const NavBarBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const ContentBox = styled.div`
    padding: 10px 50px;
`;

const LabelContainer = () => {
  const [labels, setLabels] = useLabels();
  const handleSubmit = (formData) => {
    console.log(formData);
  };
  const addNewLabel = () => {};

  return (
    <ContentBox>
      <NavBarBox>
        <NavBar/>
        <NewButton>New label</NewButton>
      </NavBarBox>
      <LabelForm handleSubmit={handleSubmit}/>
      <LabelList labels={labels}/>
    </ContentBox>
  );
};

export default LabelContainer;
