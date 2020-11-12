import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBox from './TitleBox';
import apiUri from '../../../constants/api';

const TitleStyle = styled.div`
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.25;
  font-size: 32px;
  margin: .67em 0;  
  margin-left: 20px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;

`;

const IdStyle = styled.div`
  font-size: 32px;
  font-weight: 300;
  color: #6a737d;
  box-sizing: border-box;
  margin-right: 150px;
  line-height: 1.25;
  margin-left: 10px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`;
const EditButton = styled.button`
  float: left;
  margin: 0;
  padding: 3px 12px;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  background-color: #2ea44f;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  margin-left: auto;
  height: 40px;
  width: 70px
`;

const SaveButton = styled.button`
  float: left;
  margin-right: 8px;
  color: #24292e;
  background-color: #fafbfc;
  padding: 5px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  display: inline-block;
  padding: 0;
  color: #0366d6;
  background-color: initial;
  border: 0;
  cursor: pointer;
  font-size: 16px;
`;
const Input = styled.input`
  width: 100%;
  margin-right: 16px;
  font-size: 20px;
  background-color: #fafbfc;
  padding: 5px 12px;
  line-height: 20px;
  color: #24292e;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  font: inherit
`;
const Buttons = styled.div`
  display: flex;
  margin-left:auto;
`;
const Title = (data) => {
  const { children } = data;
  const [title, setTitle] = useState(children.title);
  const [mode, setMode] = useState(false);
  const [basicTitle, setBasicTitle] = useState(children.title);
  const changeMode = () => {
    setMode(!mode);
  }
  const saveEditTitle = async () => {
    //fetch로 update...
    const body = {
      issue_id: children.id,
      title: title
    }
    const response = await fetch(apiUri.issueUpdate, {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const { success, message } = await response.json();

    if (!success) {
      alert(message);
      return;
    }
    setBasicTitle(title);
    setMode(!mode);
  }
  const cancelEditTitle = () => {
    setMode(!mode);
    setTitle(basicTitle);
  }
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  if(mode){
    return (
      <>
      <TitleBox>
        <Input value={title} onChange={onChange} />
        <Buttons>
          <SaveButton onClick={ saveEditTitle }>save</SaveButton>
          <CancelButton onClick={ cancelEditTitle }>cancel</CancelButton>
        </Buttons>
      </TitleBox>
      </>
    );
  }

  
  return (
    <>
    <TitleBox>
      <TitleStyle>{ title }</TitleStyle>
      <IdStyle>#{ children.id }</IdStyle>
      <EditButton onClick={ changeMode }>Edit</EditButton>
    </TitleBox>
    </>
  );

};

export default Title;
