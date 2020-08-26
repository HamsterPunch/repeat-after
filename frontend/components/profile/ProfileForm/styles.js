import styled from 'styled-components';
import { Input, Button } from 'antd';

export const WrapperDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 65px);
    background: white;
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media only screen and (min-width: 768px) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`;
export const PageTitleDiv = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 2rem;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 8rem;
        margin: 0 auto;
        font-size: 1.5rem;
    }
`;
export const ProfileImageDiv = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 14rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin: 0 auto;
    }
`;
export const StyledImage = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
        width: 10rem;
        height: 10rem;
        border-radius: 5rem;
    }
`;
export const ProfileNicknameDiv = styled.div`
    width: 100%;
    height: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 7rem;
        margin: 0 auto;
    }
`;
export const StyledInput = styled(Input)`
    width: 100%;
    height: 3rem;
    border-radius: 4px;
    font-size: 1.05rem;
    text-align: center;
`;
export const ButtonDiv = styled.div`
    width: 100%;
    height: 7rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 8rem;
        margin: 0 auto;
    }
`;
export const SubmitButton = styled(Button)`
    width: 100%;
    height: 3rem;
    border: none;
    background: rgb(51, 121, 217);
    color: white;
    &:focus, :active, :hover {
        background: rgb(22, 64, 115);
        color: white;
    }
    @media only screen and (min-width: 768px) {
        width: 28rem;
        height: 3rem;
    }
`;
export const CancelButton = styled(Button)`
    width: 100%;
    height: 3rem;
    @media only screen and (min-width: 768px) {
        width: 28rem;
        height: 3rem;
    }
`;