import styled from 'styled-components';
import { Popover } from 'antd';
import { RedoOutlined, CustomerServiceOutlined } from '@ant-design/icons';

export const WrapperDiv = styled.div`
    width: 100%;
    min-height: 2.5rem;
    background: white;
    border: 1px solid lightgray;
    display: flex;
    @media only screen and (min-width: 768px) {
        min-height: 3rem;
    }
`;
export const SubtitlePopover = styled(Popover)`
    flex: 1;
    cursor: pointer;
    padding: 8px;
    color: black;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 768px) {
        font-size: 1rem;
    }
`;
export const UtilsDiv = styled.div`
    width: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (min-width: 1024px) {
        width: 5rem;
    }
`;
export const StyledRedoOutlined = styled(RedoOutlined)`
    font-size: 1.1rem;
    font-weight: bold;
`;
export const StyledCustomerServiceOutlined = styled(CustomerServiceOutlined)`
    font-size: 1.1rem;
    font-weight: bold;
`;