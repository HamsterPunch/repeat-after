import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import Logo from '../Logo';
import { WrapperDiv, ButtonBox, HeaderButton } from './styles';

import { LOG_OUT_REQUEST } from '../../../reducers/user';

const HDHeader = () => {
    const dispatch = useDispatch();

    const { me } = useSelector(state => state.user);

    const onLogOut = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST
        });
    }, []);

    return (
        <WrapperDiv>
            <ButtonBox>
                <Link href='/posts'>
                    <a><HeaderButton>All Posts</HeaderButton></a>
                </Link>
                <Link href='//www.hamsterpunch.info'>
                    <a target='_blank'><HeaderButton>Developer Info</HeaderButton></a>
                </Link>
            </ButtonBox>
            <Logo />
            <ButtonBox>
                { me
                    ? <>
                        <Link href='/profile'>
                            <a><HeaderButton>Profile</HeaderButton></a>
                        </Link>
                        <HeaderButton onClick={onLogOut}>LogOut</HeaderButton>
                    </>
                    : <>
                        <Link href='/login'>
                            <a><HeaderButton>LogIn</HeaderButton></a>
                        </Link>
                        <Link href='/signup'>
                            <a><HeaderButton>SignUp</HeaderButton></a>
                        </Link>
                    </>}
            </ButtonBox>
        </WrapperDiv>
    );
};

export default HDHeader;