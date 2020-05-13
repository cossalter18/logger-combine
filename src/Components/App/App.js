import React from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {

  handleClick = () => {
    console.log('in handleClick');
    this.props.dispatch({ type: 'test00', payload: 'test info' })
  }

  componentDidMount() {
    console.log(this.props);
    this.props.dispatch({ type: 'FETCH_STARSHIPS'});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> lamport combine logger</p>
          <p>Reducer One: {this.props.reduxState.reducerOne}</p>
          <p>Reducer Two: {this.props.reduxState.reducerTwo}</p>
          <button onClick={this.handleClick}>Test Dispatch</button>
        </header>
      </div>

    );//end return
  };// end render
};// end class

const putStateOnProps = (reduxState) => ({ reduxState })

export default connect(putStateOnProps)(App);
