import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Head from 'next/head';

import AppLayout from '../components/common/AppLayout';
import PostList from '../components/posts/PostList';
import wrapper from '../store/configureStore';

import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Posts = () => {
    const dispatch = useDispatch();

    const { loadPostsLoading, mainPosts, hasMorePosts } = useSelector(state => state.post);

    useEffect(() => {
        function onScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        data: {
                            limit: 4,
                            lastId
                        }
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [hasMorePosts, loadPostsLoading, mainPosts]);

    return (
        <div>
            <Head>
                <title>전체 포스트 | Repeat:After</title>
            </Head>
            <AppLayout>
                <PostList />
            </AppLayout>
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_USER_REQUEST
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
        data: {
            limit: 4
        }
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Posts;