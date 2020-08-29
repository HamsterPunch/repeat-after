import React from 'react';
import { useSelector } from 'react-redux';

import Line from '../Line';
import { WrapperDiv, TitleDiv } from './styles';

const LineConsole = () => {
    const { Lines } = useSelector(state => state.post.singlePost);

    const SortedLines = Lines.sort((a, b) => (a.order < b.order) ? -1 : 1);

    return (
        <WrapperDiv>
            <TitleDiv>
                대사 한줄씩 들어보기
            </TitleDiv>
            { SortedLines.map(v => (
                <Line key={v.id} line={v} />
            ))}
        </WrapperDiv>
    );
};

export default LineConsole;