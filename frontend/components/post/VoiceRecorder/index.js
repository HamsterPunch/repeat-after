import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { message } from 'antd';

import { WrapperDiv, UtilityButton, StyledImg, DisabledStyledImg, RecorderBox } from './styles';

import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../../../reducers/post';

const ReactMic = dynamic(() => 
    import('react-mic').then((mod) => mod.ReactMic),
    { ssr: false }
)

const VoiceRecorder = () => {
    const dispatch = useDispatch();

    const id = useSelector(state => state.user.me?.id);
    const { singlePost } = useSelector(state => state.post);

    const [ recording, setRecording ] = useState(false);
    const [ recordedContent, setRecordedContent ] = useState(null);
    const [ available, setAvailable ] = useState(true);

    const liked = singlePost.Likers.find(v => v.id === id);

    {/*
    useEffect(() => {
        navigator.getUserMedia(
            { audio: true },
            () => {},
            function(err) {
                message.error('마이크가 연결되어 있지 않아 서비스 이용이 제한됩니다.');
                setAvailable(false);
            }
        )
    }, []);
    */}

    const onStartRecording = useCallback(() => {
        setRecording(true);
    }, []);
    const onStopRecording = useCallback(() => {
        setRecording(false);
    }, []);
    const onStop = useCallback((recordedBlob) => {
        const url = URL.createObjectURL(recordedBlob.blob);
        setRecordedContent(url);
    }, []);
    const onPlayRecording = useCallback(() => {
        const tmp = new Audio(recordedContent);
        tmp.play();
    }, [recordedContent]);
    const onClickDisabled = useCallback(() => {
        message.error('해당 서비스를 이용하려면 마이크가 연결되어있어야 합니다.');
    }, []);

    const onClickLike = useCallback(() => {
        if (!id) {
            return message.error('로그인이 필요합니다.');
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: singlePost.id
        });
    }, [id, singlePost.id]);
    const onClickUnlike = useCallback(() => {
        if (!id) {
            return message.error('로그인이 필요합니다.');
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: singlePost.id
        });
    }, [id, singlePost.id]);

    return (
        <WrapperDiv>
            <UtilityButton>
                { recordedContent && !recording
                    ? <StyledImg src='/utils/play.png' onClick={onPlayRecording} />
                    : available
                        ? <DisabledStyledImg src='/utils/play_disabled.png' />
                        : <DisabledStyledImg src='/utils/play_disabled.png' onClick={onClickDisabled} />
                }
            </UtilityButton>
            <UtilityButton>
                { recording
                    ? <StyledImg src='/utils/stop.png' onClick={onStopRecording} />
                    : available
                        ? <DisabledStyledImg src='/utils/stop_disabled.png' />
                        : <DisabledStyledImg src='/utils/stop_disabled.png' onClick={onClickDisabled} />
                }
            </UtilityButton>
            <UtilityButton>
                { recording
                    ? <StyledImg src='/utils/recording.png' />
                    : available
                        ? <StyledImg src='/utils/recording_start.png' onClick={onStartRecording} />
                        : <DisabledStyledImg src='/utils/recording_disabled.png' onClick={onClickDisabled} />
                }
            </UtilityButton>
            <UtilityButton>
                { liked
                    ? <StyledImg src='/utils/like.png' onClick={onClickUnlike} />
                    : <StyledImg src='/utils/like_disabled.png' onClick={onClickLike} />
                }
            </UtilityButton>
            <RecorderBox>
                <ReactMic
                    record={recording}
                    onStop={onStop}
                    visualSetting='none'
                />
            </RecorderBox>
        </WrapperDiv>
    );
};

export default VoiceRecorder;