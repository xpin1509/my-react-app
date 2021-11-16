import React, { Component } from "react";

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    changeDta () {
        console.log(this)
        this.setState({
            show: true
        })
    }
    render() {
      console.log('child ...')
      const { isTure } = this.props
      return(
            <div onClick={this.changeDta.bind(this)}>
                helle owlrd
                {isTure ? 'true' : 'false'}
            </div>
      )
    }
}

