import React from 'react';
import './App.css';
import { connect } from 'react-redux'


class App extends React.Component{

  componentDidMount(){
    console.log(this.props);
    
  }
render() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  
  );//end return
};// end render
};// end class

const putStateOnProps=(reduxState) =>([reduxState])

export default connect(putStateOnProps)(App);
