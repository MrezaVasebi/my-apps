import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { appColors, appRadius } from '../../../constant';

import { AppText } from '../../../components/txt'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const DateModal = ({ closeModal, title, children }) => {
    return (
        <Modal statusBarTranslucent transparent animationType='fade' >
            <View style={styles.root} >
                <View style={styles.container} >
                    <View style={styles.headerStyle}>
                        <AppText label={title} />

                        <TouchableOpacity onPress={closeModal} >
                            <Ionicons name="close-circle-sharp" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default DateModal

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    container: {
        padding: 5,
        width: '90%',
        borderRadius: appRadius.m,
        backgroundColor: appColors.primary,
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})