import React, { Component } from 'react'
import { connect } from 'react-redux'

function computeSummary (counterValues) {
    let summary = 0
    for (let key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key]
        }
    }
    return summary
}
class Summary extends Component {
    render() {
        return (
            <div>
                总共 { this.props.value }
            </div>
        )
    }
}
function mapStateToProps (state, ownProps) {
    return {
        value: computeSummary(state)
    }
}
export default connect(mapStateToProps)(Summary)