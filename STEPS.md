[] npx create-react-app NAME
[] npm install redux react-redux 

-------------------------------------------------

[] create components folders
[] remove logo from App.js
[] change App.js to a component in index.js

    import App from './Components/App/App';

[] import provider and store in index.js

    import {Provider} from 'react-redux'
    import {createStore} from 'redux';

[] create reducer 

    const reducerOne=(state=0, action) =>{
    console.log('in reducerOne');
    return state;

[] create store for reducer

    const store = createStore(reducerOne);

[] Wrap App in index.js in:
    
    <Provider store = {store}>
    <App/>
    </Provider>

[] Import connect on App.js and apply to the bottom make reduxState a prop

    import { connect } from 'react-redux'

    const putStateOnProps=(reduxState) =>([reduxState])
    export default connect(putStateOnProps)(App);

[] npm install redux-logger

    //import into index.js//
    import logger from 'redux-logger'

[] add combineReducers in with {createStore} index.js

    import {createStore, combineReducers} from 'redux'

[] create second reducer

    const reducerTwo=(state='1', action) =>{
    console.log('in reducerTwo', action);
    return state;
    }

[] add reducers to store in index.js

    const store = createStore( combineReducers({reducerOne, reducerTwo}));

[] apply middleware

    //import with create store and combine reducers//
    import {createStore, combineReducers, applyMiddleware} from 'redux'

[] add to store index.js

    const store = createStore( 
    combineReducers({reducerOne, reducerTwo}),
    applyMiddleware(logger)
    );
-------------------------------------------------
                SAGAS

[] npm install redux-saga
[] import saga and sagaMiddleware on index.js


    import {takeEvery, put} from 'redux-saga/effects';
    import createSagaMiddleware from 'redux-saga;'

[] create sagaMiddleware const

    const sagaMiddleware = createSagaMiddleware();

[] add sagaMiddleware to applyMiddleware()

    applyMiddleware( logger, sagaMiddleware)

[] create generator function in index.js
    
    function* watcherSaga(){

    }

[] add watcherSaga to createSagaMiddleware();

    const sagaMiddleware = createSagaMiddleware(watcherSaga);

[] install axios and import to index.js

    npm install axios

    import axios from 'axios';

[]

