// 三大原则
// 1唯一的数据原
// 2保持只读的状态
// 3数据改变只能根据纯函数完成

// 与Flux的区别
// 1只有唯一store，全局唯一dispatch
// 2很多都是纯函数，不产生副作用
// 3

import React, { Component } from 'react'
import Counter from './components/Counter'
import Summary from './components/Summary'
export default class index extends Component {
    render() {
        return (
            <div>
                <Counter key="First" caption="First"/>
                <Counter key="Second" caption="Second"/>
                <Counter key="Third" caption="Third"/>
                <Summary />
            </div>
        )
    }
}
