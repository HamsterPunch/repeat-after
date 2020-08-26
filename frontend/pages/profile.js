import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from 'next/router';
import Head from 'next/head';
import { message } from 'antd';

import AppLayout from '../components/common/AppLayout';
import ProfileForm from '../components/profile/ProfileForm';
import LoadingScreen from '../components/common/LoadingScreen';
import wrapper from '../store/configureStore';

import { LOAD_USER_REQUEST } from '../reducers/user';

const Profile = () => {
    const { editProfileLoading, editProfileDone, editProfileError, me } = useSelector(state => state.user);

    const loading = editProfileLoading;

    useEffect(() => {
        if (!(me && me.id)) {
            Router.replace('/');
        }
    }, [me && me.id]);

    useEffect(() => {
        if (editProfileDone) {
            message.success('프로필 변경 성공');
        }
    }, [editProfileDone]);

    useEffect(() => {
        if (editProfileError) {
            message.error('알 수 없는 이유로 프로필 변경에 실패했습니다.');
        }
    }, [editProfileError]);

    if (!me) {
        return null;
    }

    return (
        <>
            <Head>
                <title>프로필 | React:After</title>
            </Head>
            <AppLayout>
                <ProfileForm />
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

export default Profile;