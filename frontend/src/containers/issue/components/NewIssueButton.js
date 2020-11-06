import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pathUri from '../../../constants/path';

const Button = styled.button`
  display: block;
  color: white;
  font-size: 15px;
  background-color: #0DBF18;
  border: 1px solid #009B09;
  border-radius: 5px;
  padding: 8px 15px;
  :disabled {
    background-color: #89C990;
  }
`;

// eslint-disable-next-line arrow-body-style
const NewIssueButton = () => {
  const href = pathUri.createIssue;
  return <Button type="button"><Link to={href}>New Issue</Link></Button>;
};

export default NewIssueButton;
