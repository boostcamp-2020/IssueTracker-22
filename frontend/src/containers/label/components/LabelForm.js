import React, { useState } from 'react';
import styled from 'styled-components';
import IssueLabel from '@components/IssueLabel';
import NewButton from '@components/NewButton';
import { getRandomColor } from '@lib/color';
import Button from '@components/Button';
import { Label, Input, InputForm } from './Form';
import ColorPicker from './ColorPicker';

const ButtonWrapper = styled.div`
    display: inline-flex;
    margin: 16px 0px;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const LabelForm = ({
  editing, data, handleSubmit, close,
}) => {
  const initialData = {
    name: data ? data.name : '',
    description: data ? data.description : '',
  };
  const initialColor = data ? data.color : getRandomColor();

  const [formData, setFormData] = useState(initialData);
  const [color, setColor] = useState(initialColor);

  const changeRandomColor = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const clearFormData = () => {
    setFormData({
      name: '',
      description: '',
    });
  };

  const clearFormDataAndClose = () => {
    clearFormData();
    close();
  };

  const submitAndClear = () => {
    handleSubmit({ ...formData, color });
    clearFormDataAndClose();
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
          <Button type="button" onClick={clearFormDataAndClose}>Cancle</Button>
          <NewButton
            onClick={submitAndClear}
            disabled={formData.name === ''}
          >
            {editing ? 'Save changes' : 'Create label'}
          </NewButton>
        </ButtonWrapper>
      </FlexContainer>
    </InputForm>
  );
};

export default LabelForm;
