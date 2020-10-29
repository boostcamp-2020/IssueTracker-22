import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    width: 250px;
    font-size: 16px;
`;

const Input = styled.input`
    display: block;
    width: 250px;
    font-size: 18px;
`;

const LoginForm = () => (
  <>
    <Label htmlFor="email">이메일</Label>
    <Input type="email" name="email" id="email"/>
    <Label htmlFor="email">비밀번호</Label>
    <Input type="password" name="password" id="password"/>
  </>
);

export default LoginForm;
