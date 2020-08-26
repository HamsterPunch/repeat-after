import produce from '../util/produce';

// initial state
export const initialState = {
    logInModal: false
};

// action types
export const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';

//reducer
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case CHANGE_MODAL_STATUS: {
            draft.logInModal = action.data;
            break;
        }

        default : {
            break;
        }
    }
});

export default reducer;