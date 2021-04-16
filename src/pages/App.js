import React, { Component } from 'react';
// import StateFunction from '../components/stateFunction'
// import HocComponent from "../components/hocComponent";
// import FluxPage from './fluxPage/index'
// import ReduxPage from './reduxPage/index'
// import ReactReduxPage from './reactReduxPage/index'
// import ReduxThunkPage from './reduxThunkPage/index'
// import ContextPage from './contextPage'
// import RouterPage from "./routerPage";
// import CountDown from './countDownPage/countDown'
import ReduxDeep from './reduxDeep/index'
class App extends Component {
  render() {
    return(
      <div className="appBar">
        {/* <RouterPage /> */}
        {/* <CountDown key={this.state.key} value={this.state.value}/> */}
        <ReduxDeep />
      </div>
    )
  }
}
export default App;
