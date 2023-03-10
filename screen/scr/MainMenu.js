import { StyleSheet, View } from 'react-native'

import { AppButton } from '../../components/btn'
import { MainScreen } from '../../components'
import React from 'react'
import { appPadding } from '../../constant'
import { useNavigation } from '@react-navigation/native'

const MainMenu = () => {

    const navigation = useNavigation()

    const handleNavigation = (identifier) => {
        if (identifier === 'Todo') navigation.navigate(identifier)
        else if (identifier === 'Recursive') navigation.navigate(identifier)
    }

    const menuData = [
        { routeName: 'Todo' },
        { routeName: 'Recursive' },
    ]

    return (
        <MainScreen rootStyle={styles.rootStyle} >
            <View style={styles.menuContainer} >
                {
                    menuData.map((el, index) => {
                        return <AppButton key={index}
                            label={el.routeName}
                            btnStyle={styles.menuButton}
                            lblStyle={{ padding: appPadding.m }}
                            onPress={() => handleNavigation(el.routeName)}
                        />
                    })
                }
            </View>
        </MainScreen>
    )
}

export default MainMenu

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        padding: appPadding.l,
        flexDirection: 'row',
    },
    menuContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    menuButton: {
        margin: 5,
        borderRadius: 50
    }
})