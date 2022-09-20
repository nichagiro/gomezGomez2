import React from 'react'
import { loader } from '@/styles/loading.module.css'

const Loading = ({display}) => {
    return (
        display && <span className={loader}></span>
    )
}

export default Loading