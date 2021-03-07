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
class Child extends Component {
  state = {
    count: 0
  }
  render () {
    return <div onClick={() => {
      this.setState({
        count: this.state.count+ 1
      })
    }}>{this.state.count}</div>
  }
}
class App extends Component {
  state = {
    value: 10,
    num: 2,
    key: null
  }
  changeHandle = () => {
    this.setState({
      value: 12,
      key: Date.now()
    })
  }
  render() {
    console.log('App render')
    return(
      <div className="appBar">
        {/* <RouterPage /> */}
        {/* <CountDown key={this.state.key} value={this.state.value}/> */}
        <button onClick={this.changeHandle}>切换</button>
        <Child />
      </div>
    )
  }
}
export default App;
