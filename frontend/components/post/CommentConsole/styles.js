import styled from 'styled-components';
import { List } from 'antd';

export const WrapperDiv = styled.div`
    width: 100%;
    margin-top: 2rem;
`;
export const TitleDiv = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background: rgb(210, 210, 210);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;
export const Title = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
`;
export const StyledList = styled(List)`
    width: 100%;
    border: 1px solid lightgray;
    border-top: none;
    padding: 1rem;
`;