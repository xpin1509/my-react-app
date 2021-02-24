import React, { Component } from 'react'
function A (WrappedComponent) {
    return class A extends Component {
        render() {
            return (
                <div>
                    这是A
                    <WrappedComponent />
                </div>
            )
        }
    }
}
export default A