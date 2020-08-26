import { enableES5, produce } from 'immer';

const Named = (...args) => {
    enableES5();
    return produce(...args);
};

export default Named;