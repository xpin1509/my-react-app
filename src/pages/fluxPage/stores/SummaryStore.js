import { EventEmitter } from 'events';
import AppDispatcher from '../disptacher/AppDispatcher';
import CounterStore from './CounterStore';
import * as ActionTypes from '../actions/ActionTypes'

function computeSummary (counterValues) {
    let summary = 0
    for (let key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key]
        }
    }
    return summary
}
const CHANGE_EVENT = 'changed'

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function () {
        return computeSummary(CounterStore.getCounterValues())
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
    if ((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
        AppDispatcher.waitFor([CounterStore.dispatchToken])
        SummaryStore.emitChange()
    }
})

export default SummaryStore