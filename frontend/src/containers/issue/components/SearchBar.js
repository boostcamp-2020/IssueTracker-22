import styled from 'styled-components';
import React, {useState} from 'react';
import {svg돋보기} from '../../../assets/svgPath'

const SearchBarWrapper = styled.div`
    display : flex;
    flex-direction : row;
    vertical-align: middle;
    text-align: middle;
    border: 1px solid #e1e4e8;
    width: auto;
`;

const SearchBarInput = styled.input`
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: white;
    background-repeat: no-repeat;
    background-position: right 8px center;
    width: 100%!important;
    outline: none;
    box-shadow: #e1e4e8;
    border: 0px;
`;

const SvgWrapper = styled.svg`
    alignment-baseline: middle;
    margin: 4px;
`;

const SearchBar = () => {
    const [value, setValue] = useState(0)
    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }
    const keyPressHandler = (e) => {
        if(e.key == 'Enter') {
            console.log(value)
        }
    }
    return (
        <SearchBarWrapper>
            <SvgWrapper viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                {svg돋보기}
            </SvgWrapper>
            <SearchBarInput type="search" onKeyPress={keyPressHandler} placeholder="Search all issues" onChange={onChangeHandler}/>
        </SearchBarWrapper>

    )
}

export default SearchBar;