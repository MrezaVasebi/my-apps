import { StyleSheet, View } from 'react-native';

import { AppText } from '../../components/txt';
import { IconButton } from '../../components/btn';
import { MainMenu } from '../scr';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Recursive } from '../recursive';
import { Todo } from '../todo';
import { appColors } from '../../constant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FinalNavigation = () => {

    let styleBasedOnPlatform = Platform.select({
        ios: {},
        android: { fontSize: 25, }
    })

    const TitleComponent = (props) => {
        // console.log({ props })
        // return <AppText label={'Main Menu'} lblStyle={{ ...styleBasedOPlatform }} />
        return <View style={styles.headerStyle}>
            <IconButton
                iconElement={'AntDesign'}
                iconName='logout'
            />

            <AppText
                type='title'
                label={'Menu'}
                lblStyle={{ ...styleBasedOnPlatform }}
            />

            <IconButton
                iconName='menu'
                iconElement={'Entypo'}
            />
        </View>
    }

    const customHeader = (headerName, navigation) => {
        return <View style={styles.customHeaderStyle} >
            <AppText label={headerName} type='title' lblStyle={styles.customTitleStyle} />
            <IconButton
                size={25}
                iconName={'arrowleft'}
                iconElement='AntDesign'
                btnStyle={[styles.itemBtnStyle, { marginLeft: 5 }]}
                onPress={() => navigation.goBack()}
            />
        </View>
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: appColors.orange
                },
                headerTitleStyle: {
                    color: appColors.white,
                    ...styleBasedOnPlatform
                }
            }} >
                <Stack.Screen
                    options={{
                        title: 'Menu',
                        // headerTitle: (props) => <TitleComponent {...props} />,
                        // headerStyle: {},
                        // headerTitleStyle: {},
                        // headerRight: () => {
                        //     return <IconButton
                        //         iconName='logout'
                        //         iconElement={'Ionicons'}
                        //     />
                        // },
                        headerLeft: () => {
                            return <IconButton
                                iconName='menu'
                                iconElement={'Entypo'}
                                btnStyle={styles.itemBtnStyle}
                            />
                        }
                    }}
                    name='MainMenu' component={MainMenu} />

                <Stack.Screen name='Todo' component={Todo}
                    options={{
                        title: 'Todo',
                        header: ({ navigation }) => {
                            return customHeader('Todo', navigation)
                        }
                    }}
                />

                <Stack.Screen name='Recursive' component={Recursive}
                    options={{
                        title: 'Recursive',
                        header: ({ navigation }) => {
                            return customHeader('Recursive', navigation)
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default FinalNavigation

const styles = StyleSheet.create({
    headerStyle: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        backgroundColor: appColors.orange,
    },
    itemBtnStyle: {
        marginRight: 10
    },
    customTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: appColors.white,
    },
    customHeaderStyle: {
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
        backgroundColor: appColors.orange
    }
});