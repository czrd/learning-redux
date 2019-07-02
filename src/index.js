import { createPost, editPost, setFilter } from './actions';
import appReducer, { postsReducer } from './reducers';

let state = appReducer(undefined, { type: 'INIT_ACTION' });
console.log('initial state:', state);

state = appReducer(state, createPost('Dan', 'New post'));
console.log('state after createPost:', state);

state = appReducer(state, editPost(0, 'edited post'));
console.log('state after editPost:', state);

state = appReducer(state, setFilter('none'));
console.log('state after setFilter:', state);
