import React from 'react';
import styled from 'styled-components';
import constrastColor from '@lib/color';

const Label = styled.div`
    background-color: ${(props) => props.color};
    color: ${(props) => constrastColor(props.color)};
    display: inline-block;
    padding: 0 7px;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 2em; 
`;

const IssueLabel = ({ name, color }) => <Label color={color}>{name}</Label>;

export default IssueLabel;
