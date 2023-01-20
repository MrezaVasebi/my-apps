import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { AppText } from '../../../components/txt'
import { CheckboxBtn } from '../../../components/btn'
import React from 'react'

const TodoCard = ({ onPress, item }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => onPress('isDeleted', item.id)} >
                <AntDesign name="delete" size={20} color="black" />
            </TouchableOpacity>

            <View style={styles.txtStyle} >
                <AppText
                    lblStyle={{ textDecorationLine: item.isDone ? 'line-through' : 'none' }}
                    label={item.label} />
            </View>

            <CheckboxBtn item={item}
                onPress={() => onPress('isDone', item.id)} />
        </View>
    )
}

export default TodoCard

const styles = StyleSheet.create({
    container: {
        height: 45,
        paddingBottom: 5,
        alignItems: 'center',
        borderBottomWidth: .5,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    txtStyle: {
        flex: 1,
        marginHorizontal: 5
    }
})