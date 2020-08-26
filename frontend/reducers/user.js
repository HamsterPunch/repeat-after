import produce from '../util/produce';

// initial state
export const initialState = {
    loadUserLoading: false,
    loadUserDone: false,
    loadUserError: null,

    logInLoading: false,
    logInDone: false,
    logInError: null,

    logOutLoading: false,
    logOutDone: false,
    logOutError: null,

    signUpLoading: false,
    signUpDone: false,
    signUpError: null,

    uploadImageLoading: false,
    uploadImageDone: false,
    uploadImageError: null,

    editProfileLoading: false,
    editProfileDone: false,
    editProfileError: null,

    me: null,
    imagePath: []
};

// action types
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_PROFILE_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_PROFILE_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_PROFILE_IMAGE_FAILURE';

export const EDIT_PROFILE_REQUEST = 'EDIT_PROFILE_REQUEST';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

// reducer
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_USER_REQUEST: {
            draft.loadUserLoading = true;
            draft.loadUserDone = false;
            draft.loadUserError = null;
            break;
        }
        case LOAD_USER_SUCCESS: {
            draft.loadUserLoading = false;
            draft.loadUserDone = true;
            draft.me = action.data;
            break;
        }
        case LOAD_USER_FAILURE: {
            draft.loadUserLoading = false;
            draft.loadUserError = action.error;
            break;
        }

        case LOG_IN_REQUEST: {
            draft.logInLoading = true;
            draft.logInDone = false;
            draft.logInError = null;
            break;
        }
        case LOG_IN_SUCCESS: {
            draft.logInLoading = false;
            draft.logInDone = true;
            draft.me = action.data;
            break;
        }
        case LOG_IN_FAILURE: {
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;
        }

        case LOG_OUT_REQUEST: {
            draft.logOutLoading = true;
            draft.logOutError = null;
            draft.logOutDone = false;
            break;
        }
        case LOG_OUT_SUCCESS: {
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;
        }
        case LOG_OUT_FAILURE: {
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;
        }

        case SIGN_UP_REQUEST: {
            draft.signUpLoading = true;
            draft.signUpDone = false;
            draft.signUpError = null;
            break;
        }
        case SIGN_UP_SUCCESS: {
            draft.signUpLoading = false;
            draft.signUpDone = true;
            break;
        }
        case SIGN_UP_FAILURE: {
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;
        }

        case UPLOAD_IMAGE_REQUEST: {
            draft.uploadImageLoading = true;
            draft.uploadImageDone = false;
            draft.uploadImageError = null;
            break;
        }
        case UPLOAD_IMAGE_SUCCESS: {
            draft.uploadImageLoading = false;
            draft.uploadImageDone = true;
            draft.imagePath = action.data;
            break;
        }
        case UPLOAD_IMAGE_FAILURE: {
            draft.uploadImageLoading = false;
            draft.uploadImageError = action.error;
            break;
        }

        case EDIT_PROFILE_REQUEST: {
            draft.editProfileLoading = true;
            draft.editProfileDone = false;
            draft.editProfileError = null;
            break;
        }
        case EDIT_PROFILE_SUCCESS: {
            draft.editProfileLoading = false;
            draft.editProfileDone = true;
            draft.me.nickname = action.data.nickname;
            draft.me.image = action.data.image;
            break;
        }
        case EDIT_PROFILE_FAILURE: {
            draft.editProfileLoading = false;
            draft.editProfileError = action.error;
            break;
        }

        default : {
            break;
        }
    }
});

export default reducer;