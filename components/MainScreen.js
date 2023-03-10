import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

import React from 'react'
import { appColors } from '../constant'

const MainScreen = ({ children, rootStyle }) => {

    return (
        <SafeAreaView style={[styles.root, rootStyle]} >
            {/* <View style={{ ...styles.root, ...rootStyle }} > */}
            <StatusBar hidden={true} barStyle='dark-content' backgroundColor={appColors.primary} />
            {children}
            {/* </View> */}
        </SafeAreaView >
    )
}

export default MainScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: appColors.primary,
        // paddingTop: StatusBar.currentHeight,
    }
})