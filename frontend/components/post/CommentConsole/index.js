import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Comment, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import CommentForm from '../CommentForm';
import { WrapperDiv, TitleDiv, Title, StyledList } from './styles';

const CommentConsole = () => {
    const { me } = useSelector(state => state.user);
    const { singlePost } = useSelector(state => state.post);

    const [ displayComment, setDisplayComment ] = useState(false);

    const onDisplayComment = useCallback(() => {
        setDisplayComment(true);
    }, []);

    return (
        <WrapperDiv>
            <TitleDiv onClick={onDisplayComment}>
                <Title>{`${singlePost.Comments.length || 0}개의 댓글 보기`}</Title>
                { displayComment
                    ? null
                    : <DownOutlined />
                }
            </TitleDiv>
            { displayComment
                ? <>
                    { me
                        ? <CommentForm />
                        : null
                    }
                    <StyledList
                        itemLayout='horizontal'
                        dataSource={singlePost.Comments}
                        renderItem={v => (
                            <li>
                                <Comment
                                    author={v.User.nickname}
                                    avatar={
                                        <Avatar>
                                            { v.User.image
                                                ? <img src={`${v.User.image}`} />
                                                : <img src='/utils/profile.png' />
                                            }
                                        </Avatar>
                                    }
                                    content={v.content}
                                />
                            </li>
                        )}
                    />
                </>
                : null
            }
        </WrapperDiv>
    );
};

export default CommentConsole;