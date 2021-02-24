import { useState, useEffect } from 'react'

function useLoadData () {
    const [num, setNum ] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setNum(2)
        }, 1000)
    })
    return [
        num, setNum
    ]
}

export default useLoadData