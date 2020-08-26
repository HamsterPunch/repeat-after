import styled from 'styled-components';

export const WrapperDiv = styled.div`
    display: none;
    @media only screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        background: white;
    }
`;

export const ButtonBox = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
`;
export const HeaderButton = styled.div`
    color: gray;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
    font-weight: 550;
    &:hover {
        color: rgb(51, 121, 217);;
    }
`;