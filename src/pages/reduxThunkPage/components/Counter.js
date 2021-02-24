import React, { Component } from 'react'
import * as Actions from '../Actions'
import { connect } from 'react-redux'

class Counter extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        return this.props.count !== nextProps.count
    }

    render() {
        return (
            <div>
                { this.props.caption }: 
                { this.props.count }
                <button onClick={this.props.incrementAsync}> + </button>
                <button onClick={this.props.decrement}> - </button>
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        count: state[ownProps.caption]
    }

}
function mapDispatchToProps (dispatch, ownProps) {
    return {
        incrementAsync: () => {
            dispatch(Actions.incrementAsync(ownProps.caption))
        },
        increment: () => {
            dispatch(Actions.increment(ownProps.caption))
        },
        decrement: () => {
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)