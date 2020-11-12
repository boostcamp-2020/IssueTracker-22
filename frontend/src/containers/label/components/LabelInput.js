import React from 'react';
import styled from 'styled-components';
import IssueLabel from '@components/IssueLabel';
import NewButton from '@components/NewButton';
import { Label, Input, InputForm } from './Form';
import ColorPicker from './ColorPicker';

const ButtonWrapper = styled.div`
    margin: 16px 0px;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

const LabelInput = () => (
  <InputForm>
    <IssueLabel name="Label preview" color="#c9deff"/>
    <FlexContainer>
      <Label htmlFor="name">
        Label name
        <Input type="text" id="name" placeholder="Label name" autoComplete="off"/>
      </Label>
      <Label htmlFor="description">
        Description
        <Input type="text" id="description" placeholder="Description (optional)" />
      </Label>
      <ColorPicker color="#c9deff"/>
      <ButtonWrapper>
        <NewButton>Create label</NewButton>
      </ButtonWrapper>
    </FlexContainer>
  </InputForm>
);

export default LabelInput;
