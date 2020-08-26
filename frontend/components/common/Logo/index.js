import React, { useCallback } from 'react';
import router from 'next/router';

import { WrapperDiv } from './styles';

const Logo = () => {
    const onClickLogo = useCallback(() => {
        router.push('/');
    }, []);

    return (
        <WrapperDiv onClick={onClickLogo}>
            R
        </WrapperDiv>
    );
};

export default Logo;