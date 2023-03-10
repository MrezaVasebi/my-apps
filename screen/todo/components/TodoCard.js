import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { appColors, appRadius } from '../../../constant';

import { AntDesign } from '@expo/vector-icons';
import { AppText } from '../../../components/txt'
import { CheckboxBtn } from '../../../components/btn'
import React from 'react'

const TodoCard = ({ onPress, item }) => {

    const handleBackColor = () => {
        if (item.priority === 'Low') return appColors.yellow
        if (item.priority === 'Medium') return appColors.secondary
        if (item.priority === 'High') return appColors.orange
    }

    return (
        <View style={[styles.container]} >
            <TouchableOpacity onPress={() => onPress('isDeleted', item.id)} >
                <AntDesign name="delete" size={20} color="black" />
            </TouchableOpacity>

            <View style={styles.txtStyle} >
                <AppText
                    lblStyle={{
                        fontSize: 13,
                        color: appColors.black,
                        textDecorationLine: item.isDone ? 'line-through' : 'none',
                    }}
                    label={item.label}
                />

                <View style={[styles.priorityContainer, {
                    backgroundColor: handleBackColor(),
                }]} />
            </View>

            <CheckboxBtn item={item}
                onPress={() => onPress('isDone', item.id)} />
        </View>
    )
}

export default TodoCard

const styles = StyleSheet.create({
    container: {
        padding: 5,
        height: 45,
        elevation: 1,
        borderWidth: .5,
        alignItems: 'center',
        borderRadius: appRadius.s,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        backgroundColor: appColors.white,
    },
    txtStyle: {
        flex: 1,
        marginHorizontal: 8,
        alignItems: 'center',
        flexDirection: 'row',
    },
    priorityContainer: {
        width: 8,
        height: 8,
        marginLeft: 5,
        borderRadius: 4,
    }
})