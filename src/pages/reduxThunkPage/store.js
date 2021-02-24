import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk';

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
}

const store = createStore(reducer, initValues, applyMiddleware(thunk))

export default store