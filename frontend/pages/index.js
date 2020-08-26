import React from 'react';
import axios from 'axios';
import { END } from 'redux-saga';

import AppLayout from '../components/common/AppLayout';
import PostCarousel from '../components/home/PostCarousel';
import Instruction from '../components/home/Instruction';
import wrapper from '../store/configureStore';

import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    return (
        <AppLayout>
            <PostCarousel />
            <Instruction />
        </AppLayout>
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

export default Home;