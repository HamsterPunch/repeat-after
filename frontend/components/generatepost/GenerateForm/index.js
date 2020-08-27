import React, { useCallback, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, message } from 'antd';

import LineForm from '../LineForm';
import { 
    WrapperDiv, StyledLabel, PostTitleDiv, PostDescriptionDiv, PostContentDiv, ThumbnailDiv, MediaDiv, ClipDiv, SubtitleDiv, PostLineDiv,
    StyledButton, PostTitleInput, PostDescriptionInput, ThumbnailInnerDiv, StyledImage, InputContainer, FileSelector, ButtonDiv, SubmitButton
} from './styles';

import { UPLOAD_THUMBNAIL_REQUEST, UPLOAD_VIDEO_REQUEST, UPLOAD_SUBTITLE_EN_REQUEST, UPLOAD_SUBTITLE_KR_REQUEST, ADD_POST_REQUEST } from '../../../reducers/post';

const GenerateForm = () => {
    const dispatch = useDispatch();

    const { me } = useSelector(state => state.user);
    const { thumbnailPath, videoPath, subtitleEnPath, subtitleKrPath, lines } = useSelector(state => state.post);

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ lineArray, setLineArray ] = useState([0]);

    const onClickIncrease = useCallback((e) => {
        setLineArray([
            ...lineArray,
            lineArray[lineArray.length - 1] + 1
        ]);
    }, [lineArray]);

    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const onChangeDescription = useCallback((e) => {
        setDescription(e.target.value);
    }, []);

    const thumbnailInput = useRef();
    const onClickThumbnail = useCallback(() => {
        thumbnailInput.current.click();
    }, [thumbnailInput.current]);
    const onChangeThumbnail = useCallback((e) => {
        if (!me) {
            return window.alert('프로필을 수정하려면 로그인해야 합니다.');
        }
        const thumbnailFormData = new FormData();
        [].forEach.call(e.target.files, (v) => {
            thumbnailFormData.append('thumbnail', v);
        });
        dispatch({
            type: UPLOAD_THUMBNAIL_REQUEST,
            data: thumbnailFormData
        });
    }, []);

    const videoInput = useRef();
    const onClickVideo = useCallback(() => {
        videoInput.current.click();
    }, [videoInput.current]);
    const onChangeVideo = useCallback((e) => {
        const videoFormData = new FormData();
        [].forEach.call(e.target.files, (v) => {
            videoFormData.append('video', v);
        });
        dispatch({
            type: UPLOAD_VIDEO_REQUEST,
            data: videoFormData
        });
    }, []);

    const subtitleEnInput = useRef();
    const onClickSubtitleEn = useCallback(() => {
        subtitleEnInput.current.click();
    }, [subtitleEnInput.current]);
    const onChangeSubtitleEn = useCallback((e) => {
        const subtitleFormData = new FormData();
        [].forEach.call(e.target.files, (v) => {
            subtitleFormData.append('subtitle', v);
        });
        dispatch({
            type: UPLOAD_SUBTITLE_EN_REQUEST,
            data: subtitleFormData
        });
    }, []);

    const subtitleKrInput = useRef();
    const onClickSubtitleKr = useCallback(() => {
        subtitleKrInput.current.click();
    }, [subtitleKrInput.current]);
    const onChangeSubtitleKr = useCallback((e) => {
        const subtitleFormData = new FormData();
        [].forEach.call(e.target.files, (v) => {
            subtitleFormData.append('subtitle', v);
        });
        dispatch({
            type: UPLOAD_SUBTITLE_KR_REQUEST,
            data: subtitleFormData
        });
    }, []);

    const onSubmit = useCallback(() => {
        if (!title || !description || !videoPath || !subtitleKrPath || !subtitleEnPath || !thumbnailPath || !lines) {
            return message.error('필수 정보를 입력하지 않으셨습니다.');
        }
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                title,
                description,
                video_src: videoPath[0],
                subtitle_kr_src: subtitleKrPath[0],
                subtitle_en_src: subtitleEnPath[0],
                thumbnail_src: thumbnailPath[0],
                lines
            }
        });
    }, [title, description, videoPath, subtitleKrPath, subtitleEnPath, thumbnailPath, lines]);

    return (
        <WrapperDiv>
            <Form onFinish={onSubmit}>
                <PostTitleDiv>
                    <StyledLabel>포스트 제목</StyledLabel>
                    <PostTitleInput name='title' value={title} onChange={onChangeTitle} required />
                </PostTitleDiv>
                <PostDescriptionDiv>
                    <StyledLabel>포스트 설명</StyledLabel>
                    <PostDescriptionInput name='description' value={description} onChange={onChangeDescription} rows={5} required />
                </PostDescriptionDiv>
                <PostContentDiv>
                    <ThumbnailDiv>
                        <StyledLabel>포스트 썸네일</StyledLabel>
                        <ThumbnailInnerDiv>
                            <StyledImage onClick={onClickThumbnail} src={ thumbnailPath.length ? `${thumbnailPath}` : '/utils/thumbnail.png'} />
                            <input type='file' name='thumbnail' hidden ref={thumbnailInput} onChange={onChangeThumbnail} />
                        </ThumbnailInnerDiv>
                    </ThumbnailDiv>
                    <MediaDiv>
                        <ClipDiv>
                            <StyledLabel>포스트 영상클립</StyledLabel>
                            <InputContainer>
                                <FileSelector onClick={onClickVideo}>
                                    { videoPath.length ? videoPath[0] : '클립을 선택하세요' }
                                </FileSelector>
                                <input type='file' name='video' hidden ref={videoInput} onChange={onChangeVideo} />
                            </InputContainer>
                        </ClipDiv>
                        <SubtitleDiv>
                            <StyledLabel>영어 자막</StyledLabel>
                            <InputContainer>
                                <FileSelector onClick={onClickSubtitleEn}>
                                    { subtitleEnPath.length ? subtitleEnPath[0] : '영어자막을 선택하세요' }
                                </FileSelector>
                                <input type='file' name='subtitle_en' hidden ref={subtitleEnInput} onChange={onChangeSubtitleEn} />
                            </InputContainer>
                        </SubtitleDiv>
                        <SubtitleDiv>
                            <StyledLabel>한글 자막</StyledLabel>
                            <InputContainer>
                                <FileSelector onClick={onClickSubtitleKr}>
                                    { subtitleKrPath.length ? subtitleKrPath[0] : '한글자막을 선택하세요' }
                                </FileSelector>
                                <input type='file' name='subtitle_kr' hidden ref={subtitleKrInput} onChange={onChangeSubtitleKr} />
                            </InputContainer>
                        </SubtitleDiv>
                    </MediaDiv>
                </PostContentDiv>
                <PostLineDiv>
                    <StyledLabel>대사</StyledLabel>
                    {lineArray.map(v => (
                        <LineForm key={v} index={v} />
                    ))}
                    <ButtonDiv>
                        <StyledButton onClick={onClickIncrease}>대사 추가하기</StyledButton>
                    </ButtonDiv>
                    <SubmitButton htmlType='submit'>업로드하기</SubmitButton>
                </PostLineDiv>
            </Form>
        </WrapperDiv>
    );
};

export default GenerateForm;