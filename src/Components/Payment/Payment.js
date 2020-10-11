import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import './Payment.scss'

function Payment() {

    const [{basket, user}, dispatch ] = useStateValue()


    return (
        <div>
            
        </div>
    )
}

export default Payment
