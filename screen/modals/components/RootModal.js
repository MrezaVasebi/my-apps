import { Modal, StyleSheet, View } from 'react-native'

import React from 'react'

const DateModal = ({ closeModal, title, children }) => {
    return (
        <Modal statusBarTranslucent transparent animationType='fade' >
            <View style={styles.root} >
                {children}
            </View>
        </Modal>
    )
}

export default DateModal

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)'
    }
})