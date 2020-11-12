import React, { useState } from 'react';
import styled from 'styled-components';
import apiUri from '@constants/api';
import pathUri from '@constants/path';
import CancelButton from '@containers/issue-form/components/CancelButton';
import SubmitButton from '@containers/issue-form/components/SubmitButton';

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

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  background-color: #FAFAFA;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 18px;
  resize: vertical;
  :focus {
    background-color: white;
    border-color: blue;
    outline: none;
    box-shadow: 0 0 0 3px #B9D9E8;
  }
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  border-top: 1px solid lightgray;
  padding: 10px 0;
`;

const Header = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderTitle = styled.h2`
  margin: 7px 0;
`;
const Explanation = styled.div`
  color: gray;
`;

const MilestoneFormWrapper = styled.div`
  margin: 10px 0;
`;

const InputWrapper = styled.div`
    margin: 18px 0px;
    max-width: 650px;
`;

const Label = styled.label`
    display: block;
    width: 250px;
    font-size: 16px;
    font-weight: 600;
    margin: 5px;
`;

const MilestoneFormContainer = ({ milestone }) => {
  const {
    id, title, description, due_date, is_open,
  } = milestone || {};

  const [mTitle, setMTitle] = useState(title || '');
  const [mDueDate, setMDueDate] = useState(due_date || '');
  const [mDescription, setMDescription] = useState(description || '');

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'mDueDate':
        setMDueDate(value);
        break;
      case 'mTitle':
        setMTitle(value);
        break;
      case 'mDescription':
        setMDescription(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const milestoneData = {
      title: mTitle,
      description: mDescription,
      due_date: mDueDate,
    };

    const response = await fetch(apiUri.milestones, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(milestoneData),
    });

    const { success, content, message } = await response.json();
    if (!success) {
      alert(message);
      return;
    }

    window.location.href = `/#${pathUri.milestone}`;
  };

  return (
    <>
      <Header>
        <HeaderTitle>New milestone</HeaderTitle>
        <Explanation>
          Create a new milestone to held organize your issues and pull requests.
          Learn more about milestones and issues.
        </Explanation>
      </Header>

      <MilestoneFormWrapper>
        <form onSubmit={onSubmit}>
          <InputWrapper>
            <Label htmlFor="mTitle">Title</Label>
            <Input type="text" name="mTitle" id="mTitle" placeholder="Title" onChange={onChange} value={mTitle} />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="mDueDate">Due date (optional)</Label>
            <Input type="date" name="mDueDate" id="mDueDate" onChange={onChange} value={mDueDate} />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="mDescription">Description</Label>
            <Textarea name="mDescription" id="mDescription" onChange={onChange} value={mDescription} />
          </InputWrapper>

          <FormButtons>
            <CancelButton path={`/#${pathUri.milestone}`} />
            <SubmitButton onClick={onSubmit} target={mTitle} text="Create milestone"/>
          </FormButtons>
        </form>
      </MilestoneFormWrapper>
    </>
  );
};

export default MilestoneFormContainer;
