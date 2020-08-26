import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';
import control from './control';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE: {
            return action.payload;
        }
        default: {
            const combinedReducer = combineReducers({
                user,
                post,
                control
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;