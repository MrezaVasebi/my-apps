import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { appColors, appPadding } from '../../constant'

import { AppText } from '../../components/txt'
import { recursiveData } from '../../constant/dump'

const Recursive = () => {

    const HandleTree = ({ data }) => {

        const [showNested, setShowNested] = useState({});

        const toggleNested = (name) => {
            setShowNested({ ...showNested, [name]: !showNested[name] })
            // setShowNested({ [name]: !showNested[name] });
        };

        return (
            <View>
                {
                    data.map((el, index) => {
                        return <View style={{ marginVertical: 5 }} key={index} >
                            {
                                el.fullName && <TouchableOpacity
                                    style={styles.subMenu}
                                    onPress={() => toggleNested(el.fullName)}
                                >
                                    <View style={styles.circle} />
                                    <AppText label={el.fullName} />
                                </TouchableOpacity>
                            }

                            {
                                showNested[el.fullName] ?
                                    el.child && <View style={{ paddingLeft: 15 }} >
                                        <HandleTree data={el.child} />
                                    </View>
                                    : null
                            }
                        </View>
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <View style={styles.headersStyle} >
                <AppText label={'Recursive Component'}
                    type='title'
                    lblStyle={{ borderBottomWidth: 1 }}
                />
            </View>

            <View style={{ marginTop: 10 }} >
                <HandleTree data={recursiveData} />
            </View>
        </View>
    )
}

export default Recursive

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: appPadding.l
    },
    headersStyle: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    subMenu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 6,
        height: 6,
        marginRight: 5,
        borderRadius: 3,
        backgroundColor: appColors.black,
    }
})