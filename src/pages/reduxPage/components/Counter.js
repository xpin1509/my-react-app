import React, { Component } from 'react'
import store from '../store/store'
import * as Actions from '../actions/Actions'

export default class Counter extends Component {
    state = {
        count: store.getState()[this.props.caption]
    }
    shouldComponentUpdate (nextProps, nextState) {
        return nextState.count !== this.state.count
    }
    componentDidMount () {
        store.subscribe(this.onChange)
    }
    componentWillUnmount () {
        store.unsubscribe(this.onChange)
    }
    onChange = () => {
        const newCount = store.getState()[this.props.caption]
        this.setState({
            count: newCount
        })
    }
    increment = () => {
        store.dispatch(Actions.increment(this.props.caption))
    }
    decrement = () => {
        store.dispatch(Actions.decrement(this.props.caption))
    }
    render() {
        return (
            <div>
                { this.props.caption }: 
                { this.state.count }
                <button onClick={this.increment}> + </button>
                <button onClick={this.decrement}> - </button>
            </div>
        )
    }
}
