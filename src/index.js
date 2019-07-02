import { createPost } from './actions';
import { postsReducer } from './reducers';

const initialState = [];

const action = createPost('Dan', 'New post');

const newState = postsReducer(initialState, action);
console.log(newState);
