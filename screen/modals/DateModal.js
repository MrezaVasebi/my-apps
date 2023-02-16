import { Modal, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import DatePicker from 'react-native-date-picker'
import { RootModal } from './components'

const DateModal = ({ closeModal, onSelectDate }) => {

    const [date, setDate] = useState(new Date())

    return (
        <RootModal
            closeModal={() => closeModal(false)}
            title={''}
        >
            <DatePicker 
            date={new Date()}
            mode='date' onDateChange={(value) => { console.log(value) }} />
        </RootModal>
    )
}

export default DateModal

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)'
    }
})