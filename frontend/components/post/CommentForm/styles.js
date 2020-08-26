import styled from 'styled-components';
import { Button } from 'antd';

export const WrapperDiv = styled.div`
    width: 100%;
    position: relative;
`;
export const StyledButton = styled(Button)`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 100;
`;