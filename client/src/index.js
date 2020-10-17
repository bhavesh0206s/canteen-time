import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// import reducers from './reducers';
import App from './App';


// const store = createStore({}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // <Provider store={store}>
    <App/>
  // </Provider>
  ,
  document.querySelector('#root')
);