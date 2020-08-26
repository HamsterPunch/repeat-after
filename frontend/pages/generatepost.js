import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from 'next/router';
import Head from 'next/head';

import AppLayout from '../components/common/AppLayout';
import GenerateForm from '../components/generatepost/GenerateForm';
import LoadingScreen from '../components/common/LoadingScreen';
import wrapper from '../store/configureStore';

import { LOAD_USER_REQUEST } from '../reducers/user';

const GeneratePost = () => {
    const { me } = useSelector(state => state.user);
    const { addPostLoading, addPostDone } = useSelector(state => state.post);

    const loading = addPostLoading;

    useEffect(() => {
        if (addPostDone) {
            Router.push('/');
        }
    }, [addPostDone]);

    useEffect(() => {
        if (!(me && me.role.includes('#admin'))) {
            Router.replace('/');
        }
    }, [me && me.role]);

    if (!me || !me.role.includes('#admin')) {
        return null;
    }

    return (
        <>
            <Head>
                <title>포스트 등록 | Repeat:After</title>
            </Head>
            <AppLayout>
                <GenerateForm />
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

export default GeneratePost;