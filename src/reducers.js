import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';
import { combineReducers } from 'redux';

function postsReducer(state = [], action) {
  switch (action.type) {
    case CREATE_POST: {
      const { type, ...post } = action;
      return [...state, post];
    }
    case EDIT_POST: {
      const { type, id, ...newPost } = action;
      return state.map((post, i) =>
        id === i ? { ...post, ...newPost } : post
      );
    }
    default:
      return state;
  }
}

function filterReducer(state = 'all', action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}

const appReducer = combineReducers({
  posts: postsReducer,
  filter: filterReducer
});

export default appReducer;
