import React from 'react';
import styled from 'styled-components';
import NavBar from '@components/NavBar';
import NewButton from '@components/NewButton';
import useLabels from '@lib/useLabels';
import api from '@lib/api';
import apiUri from '@constants/api';
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

  const addNewLabel = (newLabel) => {
    setLabels([...labels, newLabel]);
  };

  const handleSubmit = async (formData) => {
    const { name, description, color } = formData;
    const res = await api.post(apiUri.labels, {
      name, description, color,
    });
    if (res.success) {
      const { id } = res.content;
      addNewLabel({
        id, name, description, color_code: color,
      });
    }
  };

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
