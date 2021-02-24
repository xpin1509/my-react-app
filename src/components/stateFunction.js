import React, { useState, useEffect, useLayoutEffect, useMemo, useRef, useContext, createContext, useReducer } from 'react'
import useLoadData from './useLoadData'
// 2.useEffect和useLayoutEffect
// useLayoutEffect在dom更新之后
// useEffect在render之后

// useLayoutEffect (() => {
//     console.log('dom更新之后')
//     return (() => {
//         console.log('useLayoutEffect销毁')
//     })
// })
// useEffect(() => {
//     console.log('函数组件渲染完成')
//     return () => {
//         console.log('useEffect销毁')
//     }
// }, [])

// 3.useMemo
// useMemo接受一个函数
// 返回一个值
// const doubleAge = useMemo(() => {
//     console.log('useMemo')
//     return 2 * num
// }, [ num ])

// 4.useRef
// 保持一个值在生命周期中维持不变
// 重新赋值ref.current不会触发视图的重新渲染

// const ref = useRef()
// useEffect(() => {
//     ref.current = setInterval(() => {
//         setNum((num) => { return num + 1 })
//     }, 400)
//     console.log('useEffect')
// }, [])

// useEffect(() => {
//     if (num > 10) {
//         console.log('大于10了')
//         clearInterval(ref.current)
//     }
// })

// 5.useContext和createContext
// 通过createContext创建一个contex句柄
// Context.provider确定数据共享范围
// 通过value来分发内容
// 在子组件中通过useContext来获取内容

// const Context = createContext(null)
// <Context.Provider value={num}>
//     <Child1/>
//     <Child2/>
// </Context.Provider>
// const num = useContext(Context)


// 6. useReducer
// 创建数据仓库和管理者reducer
// 通过useReducer(reducer, store)来获取state和dispatch
// const store = {
//     num: 10
// }
// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'changeNum':
//             return {
//                 ...state,
//                 num: action.num
//             }
//         default: 
//             return {
//                 ...state
//             }
//     }
// }
// const [ state, dispatch ] = useReducer(reducer, store)
// dispatch({
//     type: 'changeNum',
//     num: 100
// })
// state.num 

function StateFunction () {
    const [ num, setNum ] = useLoadData()
    return <div>
        这是一个 { num }
    </div>
}

export default StateFunction