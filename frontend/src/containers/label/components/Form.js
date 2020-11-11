import styled from 'styled-components';

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
    height: 30px;
    background-color: #fafbfc;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
`;

export { InputForm, Label, Input };
