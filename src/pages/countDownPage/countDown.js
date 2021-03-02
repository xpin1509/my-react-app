import React, { Component } from 'react'

export default class countDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            second: this.props.value
        }
    }
    componentDidMount () {
        this.countDown()
    }
    componentWillUnmount () {
        if (this.timmerId) clearInterval(this.timmerId)
    }
    componentDidUpdate (preProps) {
        if (preProps.value !== this.props.value) {
            if (this.timmerId) clearInterval(this.timmerId)
            this.setState({
                second: this.props.value
            }, () => {
                this.countDown()
            })
        }
    }
    countDown = () => {
        this.timmerId = setInterval(() => {
            console.log(12122)
            this.setState({
                second: this.state.second - 1
            }, () => {
                if (this.state.second <= 0) {
                    clearInterval(this.timmerId)
                }
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                {this.state.second}
            </div>
        )
    }
}
