import styled from 'styled-components';
import { Button, Input } from 'antd';

export const WrapperDiv = styled.div`
    width: 90%;
    height: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    margin-bottom: 1rem;
    background: white;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;
`;
export const AudioDiv = styled.div`
    width: 100%;
    height: 3.5rem;
    border: 1px solid lightgray;
    background: ${props => props.disabled && 'rgb(245, 245, 245)'};
`;
export const LineKRDiv = styled.div`
    width: 100%;
    height: 3.5rem;
    border: 1px solid lightgray;
`;
export const LineENDiv = styled.div`
    width: 100%;
    height: 3.5rem;
    border: 1px solid lightgray;
`;
export const LineDescriptionDiv = styled.div`
    width: 100%;
    height: 5.5rem;
    border: 1px solid lightgray;
`;
export const LockButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    width: 160px;
    height: 3.5rem;
    z-index: 10;
`;
export const InputContainer = styled.div`
    width: calc(100% - 160px);
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
`;
export const FileSelector = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;
    pointer-events: ${props => props.disabled && 'none'};
`;
export const StyledInput = styled(Input)`
    width: 100%;
    height: 2.5rem;
    &: .disabled {
        background: rgb(245, 245, 245);
    }
`;
export const StyledTextArea = styled(Input.TextArea)`
    width: 100%;
    height: 4.5rem;
`;
export const StyledLabel = styled.div`
    width: 100%;
    height: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
`;