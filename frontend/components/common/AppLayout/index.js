import React from 'react';
import PropTypes from 'prop-types';

import VDHeader from '../VDHeader';
import HDHeader from '../HDHeader';
import { WrapperDiv, HeaderDiv, HeaderInnerDiv, BodyDiv, BodyInnerDiv } from './styles';

const AppLayout = ({ children }) => {
    return (
        <WrapperDiv>
            <HeaderDiv>
                <HeaderInnerDiv>
                    <VDHeader />
                    <HDHeader />
                </HeaderInnerDiv>
            </HeaderDiv>
            <BodyDiv>
                <BodyInnerDiv>
                    { children }
                </BodyInnerDiv>
            </BodyDiv>
        </WrapperDiv>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired
};

export default AppLayout;