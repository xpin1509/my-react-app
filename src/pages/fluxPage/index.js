// Flux的优势：
// 1单向数据流
// 不足：
// 1Store之间的依赖关系
// 2难以服务端渲染
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
