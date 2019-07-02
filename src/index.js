import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedPostList from './containers/ConnectedPostList';
import { createStore } from 'redux';
import appReducer from './reducers';
import { createPost } from './actions';

let store = createStore(appReducer);
store.dispatch(createPost('dan', 'hello world'));
setTimeout(() => store.dispatch(createPost('des', 'hi!')), 3000);

ReactDOM.render(
  <ConnectedPostList store={store} />,
  document.getElementById('root')
);
