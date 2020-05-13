import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

const reducerOne=(state=0, action) =>{
 // console.log('in reducerOne', action);
  return state;
}

const reducerTwo=(state='asdf', action) =>{
  //console.log('in reducerTwo', action);
  if(action.type === 'test'){
    console.log('in reducer 2, recieved test action');
    state = 'tester'
  }
  return state;
}

//create sagamiddleware
const sagaMiddleware = createSagaMiddleware(watcherSaga);

// generator function
function* watcherSaga(){
//watcher is going to listen for Saga things
// generator function so we can do async stuff
// we will use "yield" in these
yield takeEvery( 'FETCH_STARSHIPS', fetchShips )
}//end watcherSaga

function* fetchShips(action){
  console.log('in fetchShips:', action);
}


function* testSaga(action){
  console.log('in testSaga', action);
}

const store = createStore( 
combineReducers({reducerOne, reducerTwo}),
applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(watcherSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
