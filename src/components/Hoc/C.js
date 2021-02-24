import React, { Component } from 'react'
import A from "./A";
class C extends Component {
    render() {
        return (
            <div>
                这是C
            </div>
        )
    }
}
export default A(C)