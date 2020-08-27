import React from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';

import { WrapperDiv, PlayerBox } from './styles';

const VideoPlayer = () => {
    const { singlePost } = useSelector(state => state.post);

    return (
        <WrapperDiv>
            <PlayerBox>
                <ReactPlayer
                    url={`${singlePost.video_src}`}
                    width='100%'
                    height='100%'
                    controls
                    config={
                        {file: {
                            attributes: {
                                crossOrigin: 'true'
                            },
                            tracks: [
                                {kind: 'subtitles', src: `${singlePost.subtitle_kr_src}`, srcLang: 'kr', default: true},
                                {kind: 'subtitles', src: `${singlePost.subtitle_en_src}`, srcLang: 'en'}
                            ]
                        }}
                    }
                />
            </PlayerBox>
        </WrapperDiv>
    );
};

export default VideoPlayer;