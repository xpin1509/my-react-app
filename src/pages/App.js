import React, { Component } from 'react';
// import StateFunction from '../components/stateFunction'
// import HocComponent from "../components/hocComponent";
// import FluxPage from './fluxPage/index'
// import ReduxPage from './reduxPage/index'
// import ReactReduxPage from './reactReduxPage/index'
// import ReduxThunkPage from './reduxThunkPage/index'
// import ContextPage from './contextPage'
import RouterPage from "./routerPage";
class App extends Component {
  render() {
    return(
      <div className="appBar">
        <RouterPage />
      </div>
    )
  }
}
export default App;
