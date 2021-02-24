import React, { Component } from 'react'
import ThemeContext from './context'
export default class Child extends Component {
    static contextType = ThemeContext
    render() {
        return (
            <div>
                hello world { this.context }
            </div>
        )
    }
}