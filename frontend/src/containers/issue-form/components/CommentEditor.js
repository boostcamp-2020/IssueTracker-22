import React from 'react';
import styled from 'styled-components';

const CommentEditorWrapper = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
  margin: 10px 0;
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid lightgray;
  margin: 10px 0;
`;

const Tab = styled.button`
  all: unset;
  color: gray;
  border: 1px solid lightgray;
  border-bottom: none;
  padding: 10px 15px;
  margin-right: 7px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.5s;
  :hover {
    transition: all 0.5s;
    color: black;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 200px;
  border: none;
  border-bottom: 1px dashed lightgray;
  background-color: inherit;
  font-size: 18px;
  resize: vertical;
  :focus {
    background-color: white;
    border-color: blue;
    outline: none;
    box-shadow: 0 0 0 3px #B9D9E8;
  }
`;

const FileChooserBox = styled.div`
  position: relative;
`;

const FileChooser = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: .01;
`;

const FileChooserLabel = styled.div`
  padding: 5px 10px;
  width: 100%;
  background-color: #FAFAFA;
  pointer-events: none;
`;

const WriteBox = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #FAFAFA;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

// eslint-disable-next-line arrow-body-style
const CommentEditor = ({ onChange, onFileUpload, value }) => {
  return (
    <CommentEditorWrapper>
      <Tabs>
        <Tab type="button">Write</Tab>
        <Tab type="button">Preview</Tab>
      </Tabs>

      <WriteBox>
        <Textarea placeholder="Leave a comment" name="description" onChange={onChange} value={value} />
        <FileChooserBox>
          <FileChooser accept=".gif,.jpeg,.jpg,.png,.docx,.gz,.log,.pdf,.pptx,.txt,.xlsx,.zip" type="file" multiple="" onChange={onFileUpload} />
          <FileChooserLabel>Attach files by selecting here</FileChooserLabel>
        </FileChooserBox>
      </WriteBox>
    </CommentEditorWrapper>
  );
};

export default CommentEditor;
