import React from 'react';

import VideoPlayer from '../../../components/post/VideoPlayer';
import VoiceRecorder from '../../../components/post/VoiceRecorder';

import { WrapperDiv } from './styles';

const MediaConsole = () => {
    return (
        <WrapperDiv>
            <VideoPlayer />
            <VoiceRecorder />
        </WrapperDiv>
    );
};

export default MediaConsole;