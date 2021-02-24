import React, { Component } from 'react'
import B from "./B";
import C from "./C";
class hocComponent extends Component {
    render() {
        return (
            <div>
                这是组件
                <B />
                <C />
            </div>
        )
    }
}

export default hocComponent