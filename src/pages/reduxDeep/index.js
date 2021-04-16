import { Button } from 'antd';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const ActionType = {
    add: {
        type: 'ADD'
    },
    cut: {
        type: 'CUT'
    },
    asyncAdd: dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'ADD'
            })
        }, 500)
    }
}
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

const store = createStore(reducers, applyMiddleware(thunk, logger));

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
                    store.dispatch(ActionType.asyncAdd)
                }}>+</Button>
                <Button onClick={() => {
                    store.dispatch(ActionType.cut)
                }}>-</Button>
            </div>
        );
    }
}

export default index;


// function applyMiddleware1 (...middlewares) {
//     return (createStore) => (reducer, preloadedState, enhancer) => {
//         var store = createStore(reducer, preloadedState, enhancer);
//         var dispatch = store.dispatch;
//         var chain = [];
    
//         var middlewareAPI = {
//             getState: store.getState,
//             dispatch: (action) => dispatch(action)
//         };
//         chain = middlewares.map(middleware => middleware(middlewareAPI));
//         dispatch = compose1(...chain)(store.dispatch);
    
//         return {...store, dispatch}
//     }
// }

// function compose1 (...fn) {
//     return fn.reduce((compose, cur) => {
//         return function (...arg) {
//             return compose(cur(...arg))
//         }
//     })
// }