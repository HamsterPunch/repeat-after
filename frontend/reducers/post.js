import produce from '../util/produce';

// initial state
export const initialState = {
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,

    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,

    uploadVideoLoading: false,
    uploadVideoDone: false,
    uploadVideoError: null,

    uploadSubtitleLoading: false,
    uploadSubtitleDone: false,
    uploadSubtitleError: null,

    uploadThumbnailLoading: false,
    uploadThumbnailDone: false,
    uploadThumbnailError: null,

    uploadAudioLoading: false,
    uploadAudioDone: false,
    uploadAudioError: null,

    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    likePostLoading: false,
    likePostDone: false,
    likePostError: null,

    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,

    mainPosts: [],
    singlePost: null,
    hasMorePosts: true,
    videoPath: [],
    subtitleKrPath: [],
    subtitleEnPath: [],
    thumbnailPath: [],
    audioPath: [],
    lines: []
};

// action types
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const UPLOAD_VIDEO_REQUEST = 'UPLOAD_VIDEO_REQUEST';
export const UPLOAD_VIDEO_SUCCESS = 'UPLOAD_VIDEO_SUCCESS';
export const UPLOAD_VIDEO_FAILURE = 'UPLOAD_VIDEO_FAILURE';

export const UPLOAD_SUBTITLE_KR_REQUEST = 'UPLOAD_SUBTITLE_KR_REQUEST';
export const UPLOAD_SUBTITLE_KR_SUCCESS = 'UPLOAD_SUBTITLE_KR_SUCCESS';
export const UPLOAD_SUBTITLE_KR_FAILURE = 'UPLOAD_SUBTITLE_KR_FAILURE';

export const UPLOAD_SUBTITLE_EN_REQUEST = 'UPLOAD_SUBTITLE_EN_REQUEST';
export const UPLOAD_SUBTITLE_EN_SUCCESS = 'UPLOAD_SUBTITLE_EN_SUCCESS';
export const UPLOAD_SUBTITLE_EN_FAILURE = 'UPLOAD_SUBTITLE_EN_FAILURE';

export const UPLOAD_THUMBNAIL_REQUEST = 'UPLOAD_THUMBNAIL_REQUEST';
export const UPLOAD_THUMBNAIL_SUCCESS = 'UPLOAD_THUMBNAIL_SUCCESS';
export const UPLOAD_THUMBNAIL_FAILURE = 'UPLOAD_THUMBNAIL_FAILURE';

export const UPLOAD_AUDIO_REQUEST = 'UPLOAD_AUDIO_REQUEST';
export const UPLOAD_AUDIO_SUCCESS = 'UPLOAD_AUDIO_SUCCESS';
export const UPLOAD_AUDIO_FAILURE = 'UPLOAD_AUDIO_FAILURE';

export const ADD_TO_LINES = 'ADD_TO_LINES';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

//reducer
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_POSTS_REQUEST: {
            if (action.data.lastId) {
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            } else {
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                draft.mainPosts = [];
                break;
            }
        }
        case LOAD_POSTS_SUCCESS: {
            draft.loadPostsLoading = false;
            draft.loadPostsDone = true;
            draft.mainPosts = draft.mainPosts.concat(action.data);
            draft.hasMorePosts = action.data.length === 10;
            break;
        }
        case LOAD_POSTS_FAILURE: {
            draft.loadPostsLoading = false;
            draft.loadPostsError = action.error;
            break;
        }

        case LOAD_POST_REQUEST: {
            draft.loadPostLoading = true;
            draft.loadPostDone = false;
            draft.loadPostError = null;
            break;
        }
        case LOAD_POST_SUCCESS: {
            draft.loadPostLoading = false;
            draft.loadPostDone = true;
            draft.singlePost = action.data;
            break;
        }
        case LOAD_POST_FAILURE: {
            draft.loadPostLoading = false;
            draft.loadPostError = action.error;
            break;
        }

        case UPLOAD_VIDEO_REQUEST: {
            draft.uploadVideoLoading = true;
            draft.uploadVideoDone = false;
            draft.uploadVideoError = null;
            break;
        }
        case UPLOAD_VIDEO_SUCCESS: {
            draft.uploadVideoLoading = false;
            draft.uploadVideoDone = true;
            draft.videoPath = action.data;
            break;
        }
        case UPLOAD_VIDEO_FAILURE: {
            draft.uploadVideoLoading = false;
            draft.uploadVideoError = action.error;
            break;
        }

        case UPLOAD_SUBTITLE_KR_REQUEST: {
            draft.uploadSubtitleLoading = true;
            draft.uploadSubtitleDone = false;
            draft.uploadSubtitleError = null;
            break;
        }
        case UPLOAD_SUBTITLE_KR_SUCCESS: {
            draft.uploadSubtitleLoading = false;
            draft.uploadSubtitleDone = true;
            draft.subtitleKrPath = action.data;
            break;
        }
        case UPLOAD_SUBTITLE_KR_FAILURE: {
            draft.uploadSubtitleLoading = false;
            draft.uploadSubtitleError = action.error;
            break;
        }

        case UPLOAD_SUBTITLE_EN_REQUEST: {
            draft.uploadSubtitleLoading = true;
            draft.uploadSubtitleDone = false;
            draft.uploadSubtitleError = null;
            break;
        }
        case UPLOAD_SUBTITLE_EN_SUCCESS: {
            draft.uploadSubtitleLoading = false;
            draft.uploadSubtitleDone = true;
            draft.subtitleEnPath = action.data;
            break;
        }
        case UPLOAD_SUBTITLE_EN_FAILURE: {
            draft.uploadSubtitleLoading = false;
            draft.uploadSubtitleError = action.error;
            break;
        }

        case UPLOAD_THUMBNAIL_REQUEST: {
            draft.uploadThumbnailLoading = true;
            draft.uploadThumbnailDone = false;
            draft.uploadThumbnailError = null;
            break;
        }
        case UPLOAD_THUMBNAIL_SUCCESS: {
            draft.uploadThumbnailLoading = false;
            draft.uploadThumbnailDone = true;
            draft.thumbnailPath = action.data;
            break;
        }
        case UPLOAD_THUMBNAIL_FAILURE: {
            draft.uploadThumbnailLoading = false;
            draft.uploadThumbnailError = action.error;
            break;
        }

        case UPLOAD_AUDIO_REQUEST: {
            draft.uploadAudioLoading = true;
            draft.uploadAudioDone = false;
            draft.uploadAudioError = null;
            break;
        }
        case UPLOAD_AUDIO_SUCCESS: {
            draft.uploadAudioLoading = false;
            draft.uploadAudioDone = true;
            draft.audioPath = action.data;
            break;
        }
        case UPLOAD_AUDIO_FAILURE: {
            draft.uploadAudioLoading = false;
            draft.uploadAudioError = action.error;
            break;
        }

        case ADD_TO_LINES: {
            draft.lines = draft.lines.concat(action.data);
            draft.audioPath = [];
            break;
        }

        case ADD_POST_REQUEST: {
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
            break;
        }
        case ADD_POST_SUCCESS: {
            draft.addPostLoading = false;
            draft.addPostDone = true;
            break;
        }
        case ADD_POST_FAILURE: {
            draft.addPostLoading = false;
            draft.addPostError = action.error;
            break;
        }

        case LIKE_POST_REQUEST: {
            draft.likePostLoading = true;
            draft.likePostDone = false;
            draft.likePostError = null;
            break;
        }
        case LIKE_POST_SUCCESS: {
            draft.likePostLoading = false;
            draft.likePostDone = true;
            draft.singlePost.Likers.push({ id: action.data.UserId });
            break;
        }
        case LIKE_POST_FAILURE: {
            draft.likePostLoading = false;
            draft.likePostError = action.error;
            break;
        }

        case UNLIKE_POST_REQUEST: {
            draft.unlikePostLoading = true;
            draft.unlikePostDone = false;
            draft.unlikePostError = null;
            break;
        }
        case UNLIKE_POST_SUCCESS: {
            draft.unlikePostLoading = false;
            draft.unlikePostDone = true;
            draft.singlePost.Likers = draft.singlePost.Likers.filter(v => v.id !== action.data.UserId);
            break;
        }
        case UNLIKE_POST_FAILURE: {
            draft.unlikePostLoading = false;
            draft.unlikePostError = action.error;
            break;
        }

        case ADD_COMMENT_REQUEST: {
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.addCommentError = null;
            break;
        }
        case ADD_COMMENT_SUCCESS: {
            draft.addCommentLoading = false;
            draft.addCommentDone = true;
            draft.singlePost.Comments.push(action.data);
            break;
        }
        case ADD_COMMENT_FAILURE: {
            draft.addCommentLoading = false;
            draft.addCommentError = action.error;
            break;
        }

        default : {
            break;
        }
    }
});

export default reducer;