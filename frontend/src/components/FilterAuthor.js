import styled from 'styled-components';
import React, { useState } from 'react';
import useAuth from '../lib/useAuth'

const FilterAuthorWrapper = styled.div`
    display: flex;
`;

const FilterAuthorItems = ({authors}) => {
    return authors.map((author) => {
        return (<a>{author}</a>)
    })
}

const FilterAuthor = () => {
    const authors = useAuth()
    // const [word, setWord] = useState('')
    // const [selected, setSelected] = useState([])
    const changeHandler = (e) => {
        // setWord(e.target.value);
    }
    return (
        <FilterAuthorWrapper>
            <input type="text" onChange={changeHandler}/>
            {FilterAuthorItems(authors)}
        </FilterAuthorWrapper>
    )
}

export default FilterAuthor;