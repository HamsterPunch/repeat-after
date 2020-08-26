import styled from 'styled-components';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

export const WrapperDiv = styled.div`
    width: 100%;
    height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

export const UtilityButton = styled(MenuOutlined)`
    font-size: 1.6rem;
`;
export const AccountButton = styled(UserOutlined)`
    font-size: 1.6rem;
`;