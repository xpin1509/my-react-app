import React, { Component } from 'react'
import SummaryStore from '../stores/SummaryStore'

export default class Summary extends Component {
    state = {
        count: SummaryStore.getSummary()
    }
    componentDidMount () {
        SummaryStore.addChangeListener(this.onchange)
    }
    componentWillUnmount () {
        SummaryStore.removeChangeListener(this.onchange)
    }
    onchange = () => {
        const newTotal = SummaryStore.getSummary()
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
