import React from 'react';

import { WrapperDiv, TitleDiv, StyledImg } from './styles';

const Instruction = () => {
    return (
        <WrapperDiv>
            <TitleDiv>대사를 듣고 직접 말해보세요!</TitleDiv>
            <StyledImg src='/utils/instruction.png' />
        </WrapperDiv>
    );
};

export default Instruction;