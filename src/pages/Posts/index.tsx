import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PostsService from "../../services/posts.service";
import IPost from "../../types";
import Post from "../../components/Post";

function Posts(): JSX.Element {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const footer = document.getElementById('footer');
        const listener = () => {
            const clientHeight = document.documentElement.clientHeight;
            if (window.scrollY + clientHeight - 50 >= footer.offsetTop && !loading) {
                // setPage(page => page + 1);
                setLoading(true);
            }
        };
        window.addEventListener("scroll", listener)
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, [loading]);

    useEffect(() => {
        fetchUsers().then(() => setLoading(false));
    }, [page]);

    async function fetchUsers() {
        const postsService = new PostsService();
        const newPosts = await postsService.getPosts(page);
        setPosts(posts => [...posts, ...newPosts]);
    }

    return (
        <div>
            <PostList>
                {posts.map(({id, userId, title, body}) => {
                    return <Post key={id} id={id} userId={userId} title={title} body={body}/>
                })}
            </PostList>
            {loading && <Loading>Loading...</Loading>}
        </div>
    );
}

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const Loading = styled.div`
  margin-top: 50px;
  font-size: 24px;
  text-align: center;
  color: white;
`;

export default Posts;
