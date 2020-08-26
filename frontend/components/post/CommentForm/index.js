import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, message } from 'antd';

import { WrapperDiv, StyledButton } from './styles';

import { ADD_COMMENT_REQUEST } from '../../../reducers/post';

const CommentForm = () => {
    const dispatch = useDispatch();

    const { addCommentDone, singlePost } = useSelector(state => state.post);

    const [ comment, setComment ] = useState('');

    useEffect(() => {
        if (addCommentDone) {
            setComment('');
        }
    }, [addCommentDone]);

    const onChangeComment = useCallback((e) => {
        setComment(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        if (!comment || !comment.trim()) {
            return message.error('댓글을 입력하세요.');
        }

        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                content: comment,
                postId: singlePost.id
            }
        });
    }, [comment, singlePost.id]);

    return (
        <WrapperDiv>
            <Form onFinish={onSubmit}>
                <Input.TextArea rows={3} value={comment} onChange={onChangeComment} />
                <StyledButton type='primary' htmlType='submit'>확인</StyledButton>
            </Form>
        </WrapperDiv>
    );
};

export default CommentForm;