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
const Button = styled.button`
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

  return (
    <>
    <TitleBox>
      <TitleStyle>{ title }</TitleStyle>
      <IdStyle>#{ children.id }</IdStyle>
      <Button>Edit</Button>
    </TitleBox>
    </>
  );
};

export default Title;
