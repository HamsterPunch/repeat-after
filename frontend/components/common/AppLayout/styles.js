import styled from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    min-height: calc(100vh);
    position: relative;
`;

export const HeaderDiv = styled.div`
    width: 100%;
    border-bottom: 1px solid lightgray;
`;
export const HeaderInnerDiv = styled.div`
    width: 100%;
    @media only screen and (min-width: 1024px) {
        width: 1024px;
        margin: 0 auto;
    }
`;

export const BodyDiv = styled.div`
    width: 100%;
`;
export const BodyInnerDiv = styled.div`
    width: 100%;
    @media only screen and (min-width: 1024px) {
        width: 1024px;
        margin: 0 auto;
    }
`;