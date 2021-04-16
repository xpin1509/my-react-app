import { Button } from 'antd';
import React, { Component } from 'react';
import { createStore } from 'redux';
const defaultState = 0
const reducers = function (state = defaultState, action) {
    switch(action.type) {
        case 'ADD':
            return state + 1
        case 'CUT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(reducers);

const unsbscible = store.subscribe(() => {

    const state = store.getState();

    console.log(state)
})


/**
 * Redux 学习
 */
class index extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => {
                    store.dispatch({
                        type: 'ADD'
                    })
                }}>+</Button>
                <Button onClick={() => {
                    store.dispatch({
                        type: 'CUT'
                    })
                }}>-</Button>
            </div>
        );
    }
}

export default index;