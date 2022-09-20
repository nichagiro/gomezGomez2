import React from 'react'
import { loader } from '@/styles/loading.module.css'

const Loading = ({ display }) => {
    return (
        display && <div className={loader}>Loading...</div>
    )
}

export default Loading