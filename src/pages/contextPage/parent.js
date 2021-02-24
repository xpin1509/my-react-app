import React, { Component } from 'react'
import Child from './child'

export default class parent extends Component {
    render() {
        return (
            <div>
                <Child />
            </div>
        )
    }
}
