import styled from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    @media only screen and (min-width: 1024px) {
        width: 960px; 
    }
`;
export const PlayerBox = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
`;