import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

import { WrapperDiv } from './styles';

const LoadingDisplay = ({ loading }) => {
    if (loading) {
        return (
            <WrapperDiv>
                <PuffLoader
                    color={'#123abc'}
                    loading={true} 
                />
            </WrapperDiv>
        );
    } else {
        return null;
    }
};

export default LoadingDisplay;