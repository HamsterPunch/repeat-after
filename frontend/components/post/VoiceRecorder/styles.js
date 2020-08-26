import styled from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    height: 3rem;
    background: black;
    border-top: 1px solid lightgray;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 768px) {
        height: 4rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 64px;
        height: 576px;
        flex-direction: column;
        border-top: none;
        border-left: 1px solid lightgray;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 0;
        padding-right: 0;

    }
`;
export const UtilityButton = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
        width: 2rem;
        height: 2rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0;
        margin-bottom: 1.5rem;
    }
`;
export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;
export const DisabledStyledImg = styled.img`
    width: 100%;
    height: 100%;
`;
export const RecorderBox = styled.div`
    width: 0;
    height: 0;
    border: 1px solid gold;
    display: none;
`;