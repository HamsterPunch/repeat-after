import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Form } from 'antd';

import { WrapperDiv, TitleDiv, InputDiv, StyledInput, ButtonDiv, SubmitButton, CancelButton, LinkDiv } from './styles';

import { LOG_IN_REQUEST } from '../../../reducers/user';

const LogInForm = () => {
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                email,
                password
            }
        });
    }, [email, password]);

    return (
        <WrapperDiv>
            <Form onFinish={onSubmit}>
                <TitleDiv>
                    로그인
                </TitleDiv>
                <InputDiv>
                    <StyledInput name='user-email' value={email} onChange={onChangeEmail} type='email' placeholder='이메일' required />
                    <StyledInput name='user-password' value={password} onChange={onChangePassword} type='password' placeholder='비밀번호' required />
                </InputDiv>
                <ButtonDiv>
                    <SubmitButton htmlType='submit'>로그인</SubmitButton>
                    <Link href='/'>
                        <a><CancelButton>취소하기</CancelButton></a>
                    </Link>
                </ButtonDiv>
                <LinkDiv>
                    <Link href='/signup'><a>회원가입하기</a></Link>
                </LinkDiv>
            </Form>
        </WrapperDiv>
    );
};

export default LogInForm;