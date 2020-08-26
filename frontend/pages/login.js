import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from 'next/router';
import Head from 'next/head';
import { message } from 'antd';

import AppLayout from '../components/common/AppLayout';
import LogInForm from '../components/login/LogInForm';
import LoadingScreen from '../components/common/LoadingScreen';
import wrapper from '../store/configureStore';

import { LOAD_USER_REQUEST } from '../reducers/user';

const LogIn = () => {
    const { logInLoading, logInDone, logInError, me } = useSelector(state => state.user);

    const loading = logInLoading;

    useEffect(() => {
        if (logInDone) {
            Router.replace('/');
        }
    }, [logInDone]);

    useEffect(() => {
        if (me && me.id) {
            Router.replace('/');
        }
    }, [me && me.id]);

    useEffect(() => {
        if (logInError) {
            message.error(logInError);
        }
    }, [logInError])

    if (me) {
        return null;
    }

    return (
        <>
            <Head>
                <title>로그인 | RepeatAfter</title>
            </Head>
            <AppLayout>
                <LogInForm />
            </AppLayout>
            <LoadingScreen loading={loading} />
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
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default LogIn;