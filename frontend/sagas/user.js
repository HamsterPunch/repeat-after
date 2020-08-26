import { all, call, fork, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE,
    EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILURE
} from '../reducers/user';

// saga functions
function loadUserAPI() {
    return axios.get('/user');
}
function* loadUser() {
    try {
        const result = yield call(loadUserAPI);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e.response.data
        });
    }
}

function logInAPI(data) {
    return axios.post('/user/login', data);
}
function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
            error: e.response.data
        });
    }
}

function logOutAPI() {
    return axios.post('/user/logout');
}
function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch(e) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    return axios.post('/user', data);
}
function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e.response.data
        });
    }
}

function uploadImageAPI(data) {
    return axios.post('/user/image', data);
}
function* uploadImage(action) {
    try {
        const result = yield call(uploadImageAPI, action.data);
        yield put({
            type: UPLOAD_IMAGE_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: UPLOAD_IMAGE_FAILURE,
            error: e.response.data
        });
    }
}

function editProfileAPI(data) {
    return axios.patch('/user/profile', data);
}
function* editProfile(action) {
    try {
        const result = yield call(editProfileAPI, action.data);
        yield put({
            type: EDIT_PROFILE_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: EDIT_PROFILE_FAILURE,
            error: e.response.data
        });
    }
}

// watchers
function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchUploadImage() {
    yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImage);
}
function* watchEditProfile() {
    yield takeLatest(EDIT_PROFILE_REQUEST, editProfile);
}

export default function* userSaga() {
    yield all([
        fork(watchLoadUser),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchUploadImage),
        fork(watchEditProfile)
    ]);
}