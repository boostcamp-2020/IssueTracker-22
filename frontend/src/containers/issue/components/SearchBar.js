import styled from 'styled-components';
import React, {useState} from 'react';
import {svg돋보기} from '../../../assets/svgPath'

const Search = styled.div`
    display : flex;
    flex-direction : row;
    vertical-align: middle;

`;

const SearchBarInner = {
    padding: "5px 12px",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#24292e",
    verticalAlign: "middle",
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 8px center",
    borderTop: "1px solid #e1e4e8",
    borderBottom: "1px solid #e1e4e8",
    borderLeft : "0px",
    borderRight : "0px",
    outline: "none",
    boxShadow: "#e1e4e8",
}

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
        <Search>
            <svg class="octicon octicon-search subnav-search-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                {svg돋보기}
            </svg>
            <input style={SearchBarInner} type="search" onKeyPress={keyPressHandler} placeholder="Search all issues" onChange={onChangeHandler}/>
        </Search>

    )
}

export default SearchBar;