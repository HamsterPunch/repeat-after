import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { WrapperDiv, PostsSlider, SlideDiv, StyledA, StyledImg } from './styles';

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true
}

const PostCarousel = () => {
    const { mainPosts } = useSelector(state => state.post);

    return (
        <WrapperDiv>
            <PostsSlider {...settings}>
                { mainPosts.map(v => (
                    <SlideDiv key={v.id}>
                        <Link href={`/post/${v.id}`}>
                            <StyledA>
                                <StyledImg src={`${v.thumbnail_src}`} />
                            </StyledA>
                        </Link>
                    </SlideDiv>
                ))}
            </PostsSlider>
        </WrapperDiv>
    );
};

export default PostCarousel;