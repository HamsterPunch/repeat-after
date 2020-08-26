import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import Router from 'next/router';
import Head from 'next/head';

import AppLayout from '../../components/common/AppLayout';
import MediaConsole from '../../components/post/MediaConsole';
import LineConsole from '../../components/post/LineConsole';
import CommentConsole from '../../components/post/CommentConsole';
import LoadingScreen from '../../components/common/LoadingScreen';
import wrapper from '../../store/configureStore';

import { LOAD_USER_REQUEST } from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';

const Post = () => {
    const { addCommentLoading, likePostLoading, unlikePostLoading, singlePost } = useSelector(state => state.post);

    const loading = addCommentLoading || likePostLoading || unlikePostLoading;

    useEffect(() => {
        if (!singlePost) {
            Router.replace('/error');
        }
    }, [singlePost]);

    if (!singlePost) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{singlePost.title}</title>
            </Head>
            <AppLayout>
                <MediaConsole />
                <LineConsole />
                <CommentConsole />
                <LoadingScreen loading={loading} />
            </AppLayout>

        </>
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
        type: LOAD_POST_REQUEST,
        data: context.params.id
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Post;