import React from 'react';
import styled from 'styled-components';
import IssueLabel from '@components/IssueLabel';
import NewButton from '@components/NewButton';

const InputForm = styled.form`
    background-color: #f6f8fa;
    border: 1px solid #e1e4e8;
    padding: 16px;
`;

const Label = styled.label`
    display: block;
    margin: 16px 0px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: bolder;
`;

const Input = styled.input`
    display: block;
    margin-top: 5px;
`;

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
        <Input type="text" id="name" />
      </Label>
      <Label htmlFor="description">
        Description
        <Input type="text" id="description" />
      </Label>
      <Label htmlFor="color">
        Color
        <Input type="text" id="color" />
      </Label>
      <ButtonWrapper>
        <NewButton>Create label</NewButton>
      </ButtonWrapper>
    </FlexContainer>
  </InputForm>
);

export default LabelInput;
