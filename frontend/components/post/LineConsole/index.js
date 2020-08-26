import React from 'react';
import { useSelector } from 'react-redux';

import Line from '../Line';
import { WrapperDiv, TitleDiv } from './styles';

const LineConsole = () => {
    const { Lines } = useSelector(state => state.post.singlePost);

    return (
        <WrapperDiv>
            <TitleDiv>
                대사 한줄씩 들어보기
            </TitleDiv>
            { Lines.map(v => (
                <Line key={v.id} line={v} />
            ))}
        </WrapperDiv>
    );
};

export default LineConsole;