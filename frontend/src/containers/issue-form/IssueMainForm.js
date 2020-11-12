import React, { useState } from 'react';
import styled from 'styled-components';
import CommentEditor from './components/CommentEditor';
import SubmitButton from './components/SubmitButton';
import CancelButton from './components/CancelButton';
import UserProfileContainer from '../user-profile/UserProfileContainer';

const IssueFormBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  flex: 1 1 0;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 7px 10px;
  background-color: #FAFAFA;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 18px;
  :focus {
    background-color: white;
    border-color: blue;
    outline: none;
    box-shadow: 0 0 0 3px #B9D9E8;
  }
`;

const FlexRowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  flex: 3 3 0;
  min-width: 500px;
  display: flex;
  padding: 0 10px;
`;

const IssueMainForm = ({ user, onChange, onFileUpload, onSubmit, issue }) => {
  const { title, description } = issue;

  return (
    <Wrapper>
      <UserProfileContainer user={user} />

      <IssueFormBox>
        <Input type="text" name="title" placeholder="Title" onChange={onChange} />
        <CommentEditor name="description" onChange={onChange} onFileUpload={onFileUpload} value={description} />
        <FlexRowBetween>
          <CancelButton path="/#/issues" />
          <SubmitButton onClick={onSubmit} target={title} text="Submit new Issue" />
        </FlexRowBetween>
      </IssueFormBox>
    </Wrapper>
  );
};

export default IssueMainForm;
