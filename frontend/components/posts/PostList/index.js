import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { WrapperDiv, ListTitleDiv, ListItemDiv, PostDiv, ThumbnailDiv, StyledImage, ContentDiv, TitleDiv, DescriptionDiv } from './styles';

const PostList = () => {
    const { mainPosts } = useSelector(state => state.post);

    return (
        <WrapperDiv>
            <ListTitleDiv>
                포스트 전체 보기
            </ListTitleDiv>
            <ListItemDiv>
                { mainPosts.map(v => (
                    <Link href={`/post/${v.id}`} key={v.id}>
                        <a>
                            <PostDiv>
                                <ThumbnailDiv>
                                    <StyledImage src={`${v.thumbnail_src}`} />
                                </ThumbnailDiv>
                                <ContentDiv>
                                    <TitleDiv>
                                        {v.title}
                                    </TitleDiv>
                                    <DescriptionDiv>
                                        {v.description}
                                    </DescriptionDiv>
                                </ContentDiv>
                            </PostDiv>
                        </a>
                    </Link>
                ))}
            </ListItemDiv>
        </WrapperDiv>
    );
};

export default PostList;