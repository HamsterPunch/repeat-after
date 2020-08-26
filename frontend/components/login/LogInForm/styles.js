import styled from 'styled-components';
import { Input, Button } from 'antd';

export const WrapperDiv = styled.div`
    width: 100%;
    height: calc(100vh - 65px);
    background: white;
    padding-top: 2rem;
    padding-bottom: 2rem;
    @media only screen and (min-width: 768px) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`;
export const TitleDiv = styled.div`
    width: 100%;
    height: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 8rem;
        margin: 0 auto;
        font-size: 1.5rem;
    }
`;
export const InputDiv = styled.div`
    width: 100%;
    height: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 12rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin: 0 auto;
    }
`;
export const StyledInput = styled(Input)`
    width: 100%;
    height: 3rem;
    border-radius: 4px;
`;
export const ButtonDiv = styled.div`
    width: 100%;
    height: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 12rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin: 0 auto;
    }
`;
export const SubmitButton = styled(Button)`
    width: 100%;
    height: 3rem;
    border: none;
    background: rgb(51, 121, 217);
    color: white;
    border-radius: 4px;
    &:focus, :active, :hover {
        background: rgb(22, 64, 115);
        color: white;
    }
`;
export const CancelButton = styled(Button)`
    width: 100%;
    height: 3rem;
`;
export const LinkDiv = styled.div`
    width: 100%;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.9rem;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 3rem;
        margin: 0 auto;
    }
`;