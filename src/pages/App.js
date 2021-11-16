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
import Child from './Child'
class App extends Component {
  render() {
    console.log('parent ...')
    return(
      <div className="appBar">
        <Child isTure={true}/>
        {/* <RouterPage /> */}
        {/* <CountDown key={this.state.key} value={this.state.value}/> */}
        {/* <ReduxDeep /> */}
      </div>
    )
  }
}
export default App;
