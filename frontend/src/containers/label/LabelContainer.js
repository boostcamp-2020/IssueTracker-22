import React, { useState } from 'react';
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
    padding: 10px 5%;
`;

const FormWrapper = styled.div`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    margin-bottom: 20px;
`;

const LabelContainer = () => {
  const [labels, setLabels] = useLabels();
  const [formVisible, setFormVisible] = useState(false);

  const addNewLabel = (newLabel) => {
    setLabels([...labels, newLabel]);
  };

  const updateTargetLabel = (id) => async ({ name, description, color }) => {
    const newLabels = labels.map((label) => {
      if (label.id !== id) return label;
      return {
        name, description, color_code: color, id,
      };
    });
    const res = await api.put(`${apiUri.labels}/${id}`, {
      name, description, color,
    });
    if (res.success) {
      setLabels(newLabels);
    }
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

  const closeForm = () => setFormVisible(false);
  const openForm = () => setFormVisible(true);

  return (
    <ContentBox>
      <NavBarBox>
        <NavBar/>
        <NewButton onClick={openForm}>New label</NewButton>
      </NavBarBox>
      <FormWrapper visible={formVisible}>
        <LabelForm handleSubmit={handleSubmit} close={closeForm}/>
      </FormWrapper>
      <LabelList labels={labels} updateTargetLabel={updateTargetLabel}/>
    </ContentBox>
  );
};

export default LabelContainer;
