import { AppText } from './txt'
import React from 'react'

const NoData = ({ label = 'No Task ...' }) => {
    return <AppText label={label} lblStyle={{ fontSize: 13 }} />
}

export default NoData