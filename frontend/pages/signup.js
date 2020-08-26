import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Head from 'next/head';
import Router from 'next/router';
import { message } from 'antd';

import AppLayout from '../components/common/AppLayout';
import SignUpForm from '../components/signup/SignUpForm';
import LoadingScreen from '../components/common/LoadingScreen';
import wrapper from '../store/configureStore';

import { LOAD_USER_REQUEST } from '../reducers/user';

const SignUp = () => {
    const { signUpLoading, signUpDone, signUpError, me } = useSelector(state => state.user);

    const loading = signUpLoading;

    useEffect(() => {
        if (me && me.id) {
            Router.replace('/');
        }
    }, [me && me.id]);
    useEffect(() => {
        if (signUpDone) {
            Router.replace('/');
        }
    }, [signUpDone]);
    useEffect(() => {
        if (signUpError) {
            message.info('알 수 없는 이유로 회원가입에 실패했습니다.');
        }
    }, [signUpError]);

    if (me) {
        return null;
    }

    return (
        <>
            <Head>
                <title>회원가입 | Repeat:After</title>
            </Head>
            <AppLayout>
                <SignUpForm />
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

export default SignUp;