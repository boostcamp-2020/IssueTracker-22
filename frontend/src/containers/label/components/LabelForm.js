import React, { useState } from 'react';
import styled from 'styled-components';
import IssueLabel from '@components/IssueLabel';
import NewButton from '@components/NewButton';
import { getRandomColor } from '@lib/color';
import { Label, Input, InputForm } from './Form';
import ColorPicker from './ColorPicker';

const ButtonWrapper = styled.div`
    margin: 16px 0px;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

const LabelForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [color, setColor] = useState(getRandomColor());

  const changeRandomColor = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <InputForm>
      <IssueLabel name={formData.name === '' ? 'Label preview' : formData.name} color={color}/>
      <FlexContainer>
        <Label htmlFor="name">
          Label name
          <Input
            type="text"
            name="name"
            placeholder="Label name"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="description">
          Description
          <Input
            type="text"
            name="description"
            placeholder="Description (optional)"
            value={formData.description}
            onChange={handleChange}
          />
        </Label>
        <ColorPicker color={color} changeRandomColor={changeRandomColor}/>
        <ButtonWrapper>
          <NewButton onClick={() => handleSubmit({ ...formData, color })}>Create label</NewButton>
        </ButtonWrapper>
      </FlexContainer>
    </InputForm>
  );
};

export default LabelForm;
