import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Form } from 'antd';

import { WrapperDiv, PageTitleDiv, ProfileImageDiv, StyledImage, ProfileNicknameDiv, StyledInput, ButtonDiv, SubmitButton, CancelButton } from './styles';

import { UPLOAD_IMAGE_REQUEST, EDIT_PROFILE_REQUEST } from '../../../reducers/user';
import { backUrl } from '../../../config/config';

const ProfileForm = () => {
    const dispatch = useDispatch();

    const { me, imagePath } = useSelector(state => state.user);

    const [ nickname, setNickname ] = useState(me.nickname);

    const imageInput = useRef();
    const onClickImage = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    const onChangeImage = useCallback((e) => {
        if (!me) {
            return window.alert('프로필을 수정하려면 로그인해야 합니다.');
        }
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (v) => {
            imageFormData.append('image', v);
        });
        dispatch({
            type: UPLOAD_IMAGE_REQUEST,
            data: imageFormData
        });
    }, []);
    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        const profileFormData = new FormData();
        imagePath.forEach(v => {
            profileFormData.append('image', v);
        });
        profileFormData.append('nickname', nickname);
        return dispatch({
            type: EDIT_PROFILE_REQUEST,
            data: profileFormData
        });
    }, [imagePath, nickname]);

    return (
        <WrapperDiv>
            <Form onFinish={onSubmit}>
                <PageTitleDiv>
                    프로필
                </PageTitleDiv>
                <ProfileImageDiv>
                    <StyledImage onClick={onClickImage} src={imagePath.length ? `${backUrl}/${imagePath}` : me && me.image ? `${backUrl}/${me.image}` : '/utils/profile.png'} />
                    <input type='file' name='image' hidden ref={imageInput} onChange={onChangeImage} />
                </ProfileImageDiv>
                <ProfileNicknameDiv>
                    <StyledInput name='user-nickname' value={nickname} onChange={onChangeNickname} />
                </ProfileNicknameDiv>
                <ButtonDiv>
                    <SubmitButton htmlType='submit'>변경하기</SubmitButton>
                    <Link href='/'>
                        <a><CancelButton>취소하기</CancelButton></a>
                    </Link>
                </ButtonDiv>
            </Form>
        </WrapperDiv>
    );
};

export default ProfileForm;