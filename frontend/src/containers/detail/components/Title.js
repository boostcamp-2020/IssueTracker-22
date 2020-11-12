import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBox from './TitleBox';

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

const CancelButton = styled.button`
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


const Title = (data) => {
  const { children } = data;
  const [title, setTitle] = useState(children.title);
  const [mode, setMode] = useState(false);
  const [basicTitle, setBasicTitle] = useState(children.title);
  const changeMode = () => {
    setMode(!mode);
  }
  const saveEditTitle = () => {
    //fetch로 update...
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
        <input value={title} onChange={onChange} />
        <CancelButton onClick={ cancelEditTitle }>cancel</CancelButton>
        <SaveButton onClick={ saveEditTitle }>save</SaveButton>
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
