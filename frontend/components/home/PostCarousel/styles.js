import styled from 'styled-components';
import Slider from 'react-slick';

export const WrapperDiv = styled.div`
    width: 100%;
`;
export const PostsSlider = styled(Slider)`
    & > .slick-dots {
        bottom: 16px;
    }
`;
export const SlideDiv = styled.div`
    width: 100%;
    background: white;
    padding-top: 56.25%;
    position: relative;
`;
export const StyledA = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`;