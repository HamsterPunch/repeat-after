import React, { useState, useCallback } from 'react';
import ReactPlayer from 'react-player';

import { WrapperDiv, SubtitlePopover, UtilsDiv, StyledRedoOutlined, StyledCustomerServiceOutlined } from './styles';

const Line = ({ line }) => {
    const [ isDefault, setIsDefault ] = useState(true);
    const [ isPlaying, setIsPlaying ] = useState(false);

    const onChangeLanguage = useCallback(() => {
        setIsDefault(prev => !prev);
    }, []);
    const onPlayAudio = useCallback(() => {
        setIsPlaying(true);
    }, []);

    return (
        <WrapperDiv>
            <SubtitlePopover content={line.description}>
                { isDefault
                    ? line.subtitle_kr
                    : line.subtitle_en
                }
            </SubtitlePopover>
            <UtilsDiv>
                <StyledRedoOutlined onClick={onChangeLanguage} />
                <StyledCustomerServiceOutlined onClick={onPlayAudio} />
            </UtilsDiv>
            <div>
                <ReactPlayer
                    url={`${line.audio_src}`}
                    width='100%'
                    height='100%'
                    playing={isPlaying}
                />
            </div>
        </WrapperDiv>
    );
};

export default Line;