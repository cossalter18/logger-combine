[] npx create-react-app NAME
[] npm install redux react-redux 

-------------------------------------------------

[] create components folders
[] remove logo from App.js
[] change App.js to a component 

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

[]
