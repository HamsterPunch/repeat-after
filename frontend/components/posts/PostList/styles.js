import styled from 'styled-components';

export const WrapperDiv = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;
export const ListTitleDiv = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
`;
export const ListItemDiv = styled.div`
    width: 100%;
`;
export const PostDiv = styled.div`
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`;
export const ThumbnailDiv = styled.div`
    width: 100%;
    position: relative;
    padding-top: 56.25%;
    @media only screen and (min-width: 1024px) {
        width: 480px;
        height: 270px;
        padding-top: 0;
    }
`;
export const StyledImage = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 1024px) {
        position: relative;   
    }
`;
export const ContentDiv = styled.div`
    width: 100%;
    height: 5rem;
    @media only screen and (min-width: 768px) {
        height: 6rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 544px;
        height: 270px;
    }
`;
export const TitleDiv = styled.div`
    width: 100%;
    height: 2rem;
    padding: 4px;
    border: 1px solid lightgray;
    border-bottom: none;
    color: black;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 768px) {
        height: 2.5rem;
        font-size: 1.1rem;
    }
    @media only screen and (min-width: 1024px) {
        width: 100%;
        height: 100px;
    }
`;
export const DescriptionDiv = styled.div`
    width: 100%;
    height: 3rem;
    padding: 4px;
    border: 1px solid lightgray;
    color: black;
    font-size: 0.8rem;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: flex;
    @media only screen and (min-width: 768px) {
        height: 3.5rem;
        font-size: 1rem;
    }
    @media only screen and (min-width: 1024px) {
        height: 170px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;