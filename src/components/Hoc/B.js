import React, { Component } from 'react'
import A from "./A";
class B extends Component {
    render() {
        return (
            <div>
                这是B
            </div>
        )
    }
}
export default A(B)