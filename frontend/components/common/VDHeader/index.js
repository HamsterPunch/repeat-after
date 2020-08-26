import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Dropdown, Menu } from 'antd';

import Logo from '../Logo';
import { WrapperDiv, UtilityButton, AccountButton } from './styles';

import { LOG_OUT_REQUEST } from '../../../reducers/user';

const VDHeader = () => {
    const dispatch = useDispatch();

    const { me } = useSelector(state => state.user);

    const onLogOut = useCallback((e) => {
        if (e.key === 'logout') {
            dispatch({
                type: LOG_OUT_REQUEST
            });
        }
    }, []);

    const UtilityMenu = (
        <Menu>
            <Menu.Item key='all_posts'>
                <Link href='/posts'><a>All Posts</a></Link>
            </Menu.Item>
            <Menu.Item key='developer_info'>
                <Link href='//www.hamsterpunch.info'><a target='_blank'>Developer Info</a></Link>
            </Menu.Item>
        </Menu>
    );
    const AccountMenu = (
        <Menu onClick={onLogOut}>
            <Menu.Item key='profile'>
                <Link href='/profile'><a>Profile</a></Link>
            </Menu.Item>
            <Menu.Item key='logout'>
                LogOut
            </Menu.Item>
        </Menu>
    );
    const AccountMenu2 = (
        <Menu>
            <Menu.Item key='login'>
                <Link href='/login'><a>LogIn</a></Link>
            </Menu.Item>
            <Menu.Item key='signup'>
                <Link href='/signup'><a>SignUp</a></Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <WrapperDiv>
            <Dropdown overlay={UtilityMenu} trigger={['click']}>
                <UtilityButton />
            </Dropdown>
            <Logo />
            <Dropdown overlay={me ? AccountMenu : AccountMenu2} trigger={['click']}>
                <AccountButton />
            </Dropdown>
        </WrapperDiv>
    );
};

export default VDHeader;