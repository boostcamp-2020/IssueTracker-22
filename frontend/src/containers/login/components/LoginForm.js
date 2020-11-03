import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    width: 250px;
    font-size: 16px;
    margin: 5px;
`;

const Input = styled.input`
    display: block;
    width: 250px;
    font-size: 18px;
`;

const InputWrapper = styled.div`
    margin: 10px 0px;
`;

const FlexContainer = styled.div`
    width: 100%;
    margin: 15px;
    display: flex;
    justify-content: space-around;
`;

const LoginForm = () => (
  <>
    <InputWrapper>
      <Label htmlFor="email">이메일</Label>
      <Input type="email" name="email" id="email"/>
    </InputWrapper>
    <InputWrapper>
      <Label htmlFor="email">비밀번호</Label>
      <Input type="password" name="password" id="password"/>
    </InputWrapper>
    <FlexContainer>
      <div>로그인</div>
      <div>회원가입</div>
    </FlexContainer>
  </>
);

export default LoginForm;
