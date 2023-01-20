import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { MainScreen, NoData } from '../../components'
import { appColors, appRadius } from '../../constant'

import { AppButton } from '../../components/btn'
import { AppInput } from '../../components/inputs'
import { AppText } from '../../components/txt'
import React from 'react'
import { TodoCard } from './components'
import { useTodo } from './logic'

const Todo = () => {

    const hooks = useTodo()

    const priorityCompo = (label, style) => {
        return <TouchableOpacity
            style={{ ...styles.priorityContainer, ...style }}
            onPress={() => hooks.addingPriorityToTask(label)}
        >
            <AppText lblStyle={{ color: appColors.primary, fontSize: 13 }} label={label} />
        </TouchableOpacity>
    }

    return (
        <MainScreen rootStyle={{ padding: 10 }} >
            <AppText type={'title'} label='Todo App' />

            <View style={styles.addingContainer} >
                <AppButton
                    btnStyle={{ borderWidth: 0 }}
                    label={'Add'}
                    onPress={hooks.handleTodoApp}
                />

                <AppInput
                    value={hooks.task}
                    style={styles.inputStyle}
                    onChangeText={(value) => hooks.addingTaskToTodoList(value)}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                {priorityCompo('Low', { backgroundColor: appColors.yellow })}
                {priorityCompo('Medium', { backgroundColor: appColors.secondary })}
                {priorityCompo('High', { backgroundColor: appColors.orange })}
            </View>

            <View style={{ flex: 1 }}>
                {hooks.tasks.length === 0 && <View style={styles.noDataContainer} ><NoData /></View>}

                {
                    hooks.tasks.length !== 0 &&
                    <FlatList
                        data={hooks.tasks}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                        renderItem={({ item: value }) => {
                            return <TodoCard item={value}
                                onPress={hooks.handleActionOnTask}
                            />
                        }}
                    />
                }
            </View>
        </MainScreen>
    )
}

export default Todo

const styles = StyleSheet.create({
    addingContainer: {
        borderWidth: 1,
        paddingLeft: 10,
        overflow: 'hidden',
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: appRadius.m,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    inputStyle: {
        flex: 1,
        borderWidth: 0,
        marginRight: 10
    },
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    priorityContainer: {
        padding: 5,
        marginRight: 10,
        borderRadius: appRadius.s,
    }
})