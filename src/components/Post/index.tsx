import React from "react";
import styled from "styled-components";
import IPost from "../../types";

const Post = ({id, userId, title, body}: IPost) => {
    return (
        <StyledPost>
            <StyledPostImage style={{backgroundImage: 'url(http://placeimg.com/320/240/arch)'}}/>
            <StyledPostTitle>{id}.{title}</StyledPostTitle>
            <StyledPostBody>{body}</StyledPostBody>
        </StyledPost>
    )
}

const StyledPost = styled.article`
  max-width: 440px;
  transition: all ease 200ms;
  background-color: goldenrod;

  &:hover {
    cursor: pointer;
    box-shadow: 7px 7px 0 10px goldenrod; //0 0 10px 10px #ccc
  }
`;

const StyledPostImage = styled.div`
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledPostTitle = styled.div`
  margin: 15px 0;
  padding: 0 15px;
  font-size: 20px;
  font-weight: bold;
`;

const StyledPostBody = styled.div`
  padding: 0 15px 15px;
`;

export default Post;
