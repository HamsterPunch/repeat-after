import styled from 'styled-components';
import { Input, Button } from 'antd';

export const WrapperDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 65px);
    background: white;
`;

export const PageTitleDiv = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 3rem;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        height: 7rem;
        margin: 0 auto;
        font-size: 1.5rem;        
    }
`;

export const InputDiv = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        margin: 0 auto;
        margin-top: 1.5rem;
    }
`;
export const StyledInput = styled(Input)`
    width: 288px;
    height: 2.5rem;
    border: 1px solid lightgray;
    border-radius: 1rem;
    @media only screen and (min-width: 768px) {
        width: 29rem;
        height: 3rem;
    }
`;

export const TermDiv = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        margin: 0 auto;
        margin-top: 2rem;   
    }
`;
export const CheckboxContainer = styled.div`
    width: 24px;
    height: 40px;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 768px) {
        width: 2rem;
        height: 3rem; 
    }
`;
export const GuidanceContainer = styled.div`
    width: 264px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: 550;
    @media only screen and (min-width: 768px) {
        width: 28rem;
        height: 3rem;
        font-size: 0.95rem;
    }
`;

export const ButtonDiv = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    @media only screen and (min-width: 768px) {
        width: 30rem;
        margin: 0 auto;
        margin-top: 2.5rem;   
    }
`;
export const SubmitButton = styled(Button)`
    width: 288px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: none;
    background: rgb(51, 121, 217);
    color: white;
    border-radius: 4px;
    &:focus, :active, :hover {
        background: rgb(22, 64, 115);
        color: white;
    }
    @media only screen and (min-width: 768px) {
        width: 28rem;
        height: 3rem;   
        margin-bottom: 1rem;
    }
`;
export const CancelButton = styled(Button)`
    width: 288px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    @media only screen and (min-width: 768px) {
        width: 28rem;
        height: 3rem;
    }
`;