import React, {useState, useEffect, useContext }from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Title from './components/Title';
import TitleBox from './components/TitleBox';
import TitleEditButton from './components/TitleEditButton';
import TitleDetail from './components/TitleDetail';
import IssueContent from './components/IssueContent';
import List from './components/List';
import IssueDetail from './components/IssueDetail';
import CommentList from './components/CommentList';
import Side from './components/Side';
import CreateComment from './components/CreateComment';
import apiUri from '../../constants/api';
import userContext from '../../lib/userContext';

const Detail = styled.div`
  padding-left : 100px;
  padding-right : 100px;
`;

const IssueDetailContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useContext(userContext);

  const getData = () => {
    const url = apiUri.detail + document.location.href.split("/")[5];
    const option = {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
    }
    async function fetchUrl() {
      const response = await fetch(url, option);
      const json = await response.json();
      setData({...json.content.issues[0]});
      setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
  }

  const addComment = (description) => {
    if(user !== null) {
      const comment = {
        id: data.comments.length+1,
        author_id: user.id,
        createdAt: new Date(),
        description: description,
        user:{
          id: user.id,
          nickname: user.nickname,
          profile_url: user.profile_url,
        }
      };
      const comments = data.comments.concat(comment);
      setData({ ...data, comments: comments });
    }
  }
  
  getData();
  if(!loading) {
    return <>
      <Header />
      <Detail>
        <TitleBox>
          <Title>{ data }</Title>
          <TitleEditButton />
        </TitleBox>
        <TitleDetail>{ data }</TitleDetail>
        <IssueContent>
          <List>
            <IssueDetail>{ data }</IssueDetail>
            {CommentList(data.comments)}
            <CreateComment data={data} callback={addComment} user={user}/>
          </List>
          <Side data={ data }/>
        </IssueContent>
      </Detail>
    </>;
  }
  return <>loading...</>;
};


export default IssueDetailContainer;
