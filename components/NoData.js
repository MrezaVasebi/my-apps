import { AppText } from './txt'
import React from 'react'

const NoData = ({ label = 'No data existed...' }) => {
    return <AppText label={label} />
}

export default NoData