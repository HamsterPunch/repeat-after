import styled from 'styled-components';
import { Input, Button } from 'antd';

export const WrapperDiv = styled.div`
    width: 640px;
    margin: 0 auto;
`;
export const StyledLabel = styled.div`
    width: 100%;
    height: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
`;
export const PostTitleDiv = styled.div`
    width: 100%;
    height: 4rem;
`;
export const PostDescriptionDiv = styled.div`
    width: 100%;
    height: 10rem;
`;
export const PostContentDiv = styled.div`
    width: 100%;
    display: flex;
`;
export const ThumbnailDiv = styled.div`
    width: 480px;
    height: 286px;
    border: 1px solid lightgray;
`;
export const MediaDiv = styled.div`
    width: 160px;
    height: 286px;
    border: 1px solid lightgray;
`;
export const ClipDiv = styled.div`
    width: 100%;
    height: 95px;
    border: 1px solid lightgray;
`;
export const SubtitleDiv = styled.div`
    width: 100%;
    height: 95px;
    border: 1px solid lightgray;
`;
export const PostLineDiv = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ButtonDiv = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const StyledButton = styled(Button)`
    width: 300px;
    height: 2.5rem;
`;
export const PostTitleInput = styled(Input)`
    width: 100%;
    height: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;
export const PostDescriptionInput = styled(Input.TextArea)`
    width: 100%;
    height: 8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;
export const ThumbnailInnerDiv = styled.div`
    width: 100%;
    height: 270px;
    position: relative;
`;
export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;
export const InputContainer = styled.div`
    width: 100%;
    height: 79px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const FileSelector = styled.div`
    width: 80%;
    font-size: 0.8rem;
    border: 1px solid lightgray;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
export const SubmitButton = styled(Button)`
    width: 620px;
    height: 4rem;
    border: none;
    background: rgb(51, 121, 217);
    color: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
    &:focus, :active, :hover {
        background: rgb(22, 64, 115);
        color: white;
    }
`;