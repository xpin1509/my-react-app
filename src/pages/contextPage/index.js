import React, { Component } from 'react'
import Parent from './parent'
import ThemeContext from './context'

export default class index extends Component {
    render() {
        return (
            <div>
                <ThemeContext.Provider value="dark">
                    <Parent />
                </ThemeContext.Provider>
            </div>
        )
    }
}
