import React, { Component } from 'react'
import store from '../store/store'
function computeSummary (counterValues) {
    let summary = 0
    for (let key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key]
        }
    }
    return summary
}
export default class Summary extends Component {
    state = {
        count: computeSummary(store.getState())
    }
    componentDidMount () {
        store.subscribe(this.onchange)
    }
    componentWillUnmount () {
        store.unsubscribe(this.onchange)
    }
    onchange = () => {
        const newTotal = computeSummary(store.getState())
        this.setState({
            count: newTotal
        })
    }
    render() {
        return (
            <div>
                总共 { this.state.count }
            </div>
        )
    }
}
