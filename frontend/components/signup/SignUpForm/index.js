import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Form, Checkbox, message } from 'antd';

import { WrapperDiv, PageTitleDiv, InputDiv, StyledInput, TermDiv, CheckboxContainer, GuidanceContainer, ButtonDiv, SubmitButton, CancelButton } from './styles';

import { SIGN_UP_REQUEST } from '../../../reducers/user';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordCheck, setPasswordCheck ] = useState('');
    const [ term, setTerm ] = useState(false);

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);
    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
    }, []);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
    }, []);
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return message.info('비밀번호가 일치하지 않습니다.');
        }
        if (!term) {
            return message.info('약관에 동의하셔야합니다.');
        }
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                email,
                nickname,
                password,
                role: '#user'
            }
        });
    }, [email, nickname, password, passwordCheck, term]);

    return (
        <WrapperDiv>
            <Form onFinish={onSubmit}>
                <PageTitleDiv>
                    회원가입
                </PageTitleDiv>
                <InputDiv>
                    <StyledInput name='user-email' value={email} onChange={onChangeEmail} type='email' placeholder='이메일' required />
                </InputDiv>
                <InputDiv>
                    <StyledInput name='user-nickname' value={nickname} onChange={onChangeNickname} placeholder='닉네임' required />
                </InputDiv>
                <InputDiv>
                    <StyledInput name='user-password' value={password} onChange={onChangePassword} type='password' placeholder='비밀번호' required />
                </InputDiv>
                <InputDiv>
                    <StyledInput name='user-password-check' value={passwordCheck} onChange={onChangePasswordCheck} placeholder='비밀번호확인' type='password' required />
                </InputDiv>
                <TermDiv>
                    <CheckboxContainer>
                        <Checkbox name='user-term' checked={term} onChange={onChangeTerm} />
                    </CheckboxContainer>
                    <GuidanceContainer>
                        본 웹사이트는 포트폴리오 용도로 제작되었으며, 상업적 용도가 없습니다.
                    </GuidanceContainer>
                </TermDiv>
                <ButtonDiv>
                    <Link href='/'>
                        <a><CancelButton>취소하기</CancelButton></a>
                    </Link>
                    <SubmitButton htmlType='submit'>회원가입</SubmitButton>
                </ButtonDiv>
            </Form>
        </WrapperDiv>
    );
};

export default SignUpForm;