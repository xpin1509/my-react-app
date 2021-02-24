import React, { Component } from 'react'
import CounterStore from '../stores/CounterStore'
import * as Actions from '../actions/Actions'

export default class Counter extends Component {
    state = {
        count: CounterStore.getCounterValues()[this.props.caption]
    }
    shouldComponentUpdate (nextProps, nextState) {
        return nextState.count !== this.state.count
    }
    componentDidMount () {
        CounterStore.addChangeListener(this.onChange)
    }
    componentWillUnmount () {
        CounterStore.addChangeListener(this.onChange)
    }
    onChange = () => {
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        this.setState({
            count: newCount
        })
    }
    increment = () => {
        Actions.increment(this.props.caption)
    }
    decrement = () => {
        Actions.decrement(this.props.caption)
    }
    render() {
        return (
            <div>
                { this.props.caption }
                { this.state.count }
                <button onClick={this.increment}> + </button>
                <button onClick={this.decrement}> - </button>
            </div>
        )
    }
}
