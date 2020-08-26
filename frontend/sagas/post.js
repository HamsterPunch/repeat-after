import { all, call, fork, takeLatest, put, throttle } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
    UPLOAD_VIDEO_REQUEST, UPLOAD_VIDEO_SUCCESS, UPLOAD_VIDEO_FAILURE,
    UPLOAD_SUBTITLE_KR_REQUEST, UPLOAD_SUBTITLE_KR_SUCCESS, UPLOAD_SUBTITLE_KR_FAILURE,
    UPLOAD_SUBTITLE_EN_REQUEST, UPLOAD_SUBTITLE_EN_SUCCESS, UPLOAD_SUBTITLE_EN_FAILURE,
    UPLOAD_THUMBNAIL_REQUEST, UPLOAD_THUMBNAIL_SUCCESS, UPLOAD_THUMBNAIL_FAILURE,
    UPLOAD_AUDIO_REQUEST, UPLOAD_AUDIO_SUCCESS, UPLOAD_AUDIO_FAILURE,
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../reducers/post';

// saga functions
function loadPostsAPI(limit, lastId) {
    return axios.get(`/posts?limit=${limit}&lastId=${lastId}`);
}
function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.data.limit, action.data.lastId);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: e.response.data
        });
    }
}

function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
}
function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: LOAD_POST_FAILURE,
            error: e.response.data
        });
    }
}

function uploadVideoAPI(data) {
    return axios.post('/post/video', data);
}
function* uploadVideo(action) {
    try {
        const result = yield call(uploadVideoAPI, action.data);
        yield put({
            type: UPLOAD_VIDEO_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: UPLOAD_VIDEO_FAILURE,
            error: e.response.data
        });
    }
}

function uploadSubtitleKrAPI(data) {
    return axios.post('/post/subtitle', data);
}
function* uploadSubtitleKr(action) {
    try {
        const result = yield call(uploadSubtitleKrAPI, action.data);
        yield put({
            type: UPLOAD_SUBTITLE_KR_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: UPLOAD_SUBTITLE_KR_FAILURE,
            error: e.response.data
        });
    }
}

function uploadSubtitleEnAPI(data) {
    return axios.post('/post/subtitle', data);
}
function* uploadSubtitleEn(action) {
    try {
        const result = yield call(uploadSubtitleEnAPI, action.data);
        yield put({
            type: UPLOAD_SUBTITLE_EN_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: UPLOAD_SUBTITLE_EN_FAILURE,
            error: e.response.data
        });
    }
}

function uploadThumbnailAPI(data) {
    return axios.post('/post/thumbnail', data);
}
function* uploadThumbnail(action) {
    try {
        const result = yield call(uploadThumbnailAPI, action.data);
        yield put({
            type: UPLOAD_THUMBNAIL_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: UPLOAD_THUMBNAIL_FAILURE,
            error: e.response.data
        });
    }
}

function uploadAudioAPI(data) {
    return axios.post('/post/audio', data);
}
function* uploadAudio(action) {
    try {
        const result = yield call(uploadAudioAPI, action.data);
        yield put({
            type: UPLOAD_AUDIO_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: UPLOAD_AUDIO_FAILURE,
            error: e.response.data
        });
    }
}

function addPostAPI(data) {
    return axios.post('/post', data);
}
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: ADD_POST_FAILURE,
            error: e.response.data
        });
    }
}

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}
function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: LIKE_POST_FAILURE,
            error: e.response.data
        });
    }
}

function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: e.response.data
        });
    }
}

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e.response.data
        });
    }
}

// watchers
function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchUploadVideo() {
    yield takeLatest(UPLOAD_VIDEO_REQUEST, uploadVideo);
}
function* watchUploadSubtitleKr() {
    yield takeLatest(UPLOAD_SUBTITLE_KR_REQUEST, uploadSubtitleKr);
}
function* watchUploadSubtitleEn() {
    yield takeLatest(UPLOAD_SUBTITLE_EN_REQUEST, uploadSubtitleEn);
}
function* watchUploadThumbnail() {
    yield takeLatest(UPLOAD_THUMBNAIL_REQUEST, uploadThumbnail);
}
function* watchUploadAudio() {
    yield takeLatest(UPLOAD_AUDIO_REQUEST, uploadAudio);
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPosts),
        fork(watchLoadPost),
        fork(watchUploadVideo),
        fork(watchUploadSubtitleKr),
        fork(watchUploadSubtitleEn),
        fork(watchUploadThumbnail),
        fork(watchUploadAudio),
        fork(watchAddPost),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchAddComment)
    ]);
}