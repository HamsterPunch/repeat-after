import React, { useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

import { UPLOAD_AUDIO_REQUEST, ADD_TO_LINES } from '../../../reducers/post';

import {
    WrapperDiv, AudioDiv, LineKRDiv, LineENDiv, LineDescriptionDiv, LockButton, InputContainer, FileSelector, StyledInput, StyledTextArea, StyledLabel
} from './styles';

const LineForm = ({ index }) => {
    const dispatch = useDispatch();

    const { audioPath, lines } = useSelector(state => state.post);

    const [ subtitleKr, setSubtitleKr ] = useState('');
    const [ subtitleEn, setSubtitleEn ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ locked, setLocked ] = useState(false);

    const audioInput = useRef();
    const onClickAudio = useCallback(() => {
        audioInput.current.click();
    }, [audioInput.current]);
    const onChangeAudio = useCallback((e) => {
        const audioFormData = new FormData();
        [].forEach.call(e.target.files, (v) => {
            audioFormData.append('audio', v);
        });
        dispatch({
            type: UPLOAD_AUDIO_REQUEST,
            data: audioFormData
        });
    }, []);

    const onChangeSubtitleKr = useCallback((e) => {
        setSubtitleKr(e.target.value);
    }, []);
    const onChangeSubtitleEn = useCallback((e) => {
        setSubtitleEn(e.target.value);
    }, []);
    const onChangeDescription = useCallback((e) => {
        setDescription(e.target.value);
    }, []);

    const onClickLock = useCallback(() => {
        if (!audioPath || !subtitleKr || !subtitleEn) {
            return message.error('모든 정보를 입력하지 않으면 잠글수 없습니다.');
        }
        const line = {
            audio_src: audioPath[0],
            sub_kr: subtitleKr,
            sub_en: subtitleEn,
            description: description,
            order: index
        };
        dispatch({
            type: ADD_TO_LINES,
            data: line
        });
        setLocked(true);
    }, [audioPath, subtitleKr, subtitleEn, description]);

    return (
        <WrapperDiv>
            <AudioDiv disabled={locked}>
                <StyledLabel>오디오</StyledLabel>
                <InputContainer>
                    <FileSelector onClick={onClickAudio} disabled={locked}>
                        { lines[index] ? lines[index]['audio_src'] : audioPath.length ? audioPath[0] : '오디오를 선택하세요' }
                    </FileSelector>
                    <input type='file' name='audio' hidden ref={audioInput} onChange={onChangeAudio} />
                </InputContainer>
            </AudioDiv>
            <LineENDiv>
                <StyledLabel>영어대사</StyledLabel>
                <StyledInput name='subtitle_en' value={subtitleEn} onChange={onChangeSubtitleEn} disabled={locked} required />
            </LineENDiv>
            <LineKRDiv>
                <StyledLabel>한글대사</StyledLabel>
                <StyledInput name='subtitle_kr' value={subtitleKr} onChange={onChangeSubtitleKr} disabled={locked} required />
            </LineKRDiv>
            <LineDescriptionDiv>
                <StyledLabel>설명</StyledLabel>
                <StyledTextArea name='description' value={description} onChange={onChangeDescription} disabled={locked} rows={3} required />
            </LineDescriptionDiv>
            <LockButton onClick={onClickLock} disabled={locked}>
                #{index} 잠금
            </LockButton>
        </WrapperDiv>
    );
};

export default LineForm;