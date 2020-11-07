import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Navbar} from './components/Navbar/Navbar';
import {Main} from "./components/Main/Main";





class App extends React.Component {

  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   console.log(promiseRejectionEvent)
  // }

  // componentDidMount(){
  //   this.props.initializeApp();
  //   window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors );
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors );
  // }

  render(){
    // if(!this.props.initialized){
    //   return <Preloader />
    // }
    return (
        <div className="app">
          <Navbar />
          <Main />
        </div>
    );
  }}

// const mapStateToProps = (state) => ({
//   initialized: state.app.initialized
// });
export default App;

// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp}))(App);

