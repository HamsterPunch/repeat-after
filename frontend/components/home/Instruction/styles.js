import styled from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    min-height: 320px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: rgb(245, 245, 245);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
`;
export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
    @media only screen and (min-width: 768px) {
        width: 640px;
        padding-bottom: 2rem;
    }
`;
export const StyledImg = styled.img`
    width: 100%;
    @media only screen and (min-width: 768px) {
        width: 640px;
    }
`;