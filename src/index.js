import { createPost } from './actions';
import appReducer, { postsReducer } from './reducers';

let state = appReducer(undefined, { type: 'INIT_ACTION' });
console.log('initial state:', state);
