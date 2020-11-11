import React, {useState, useEffect }from 'react';
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

const IssueDetailContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const comment = {
      id:7,
      author_id: 4,
      createdAt: new Date(),
      description: description,
      user:{
        id:4,
        nickname:"rlaqudrnr810",
        profile_url:"https://avatars2.githubusercontent.com/u/39620410?v=4",
      }
    };
    const comments = data.comments.concat(comment);
    setData({ ...data, comments: comments });
  }
  
  getData();

  if(!loading) {
    return <>
      <Header />
      <TitleBox>
        <Title>{ data }</Title>
        <TitleEditButton />
      </TitleBox>
      <TitleDetail>{ data }</TitleDetail>
      <IssueContent>
        <List>
          <IssueDetail>{ data }</IssueDetail>
          {CommentList(data.comments)}
          <CreateComment data={data} callback={addComment}/>
        </List>
        <Side />
      </IssueContent>
    </>;
  }
  return <>loading...</>;
};


export default IssueDetailContainer;
