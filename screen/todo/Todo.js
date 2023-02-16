import { MainScreen, NoData } from '../../components'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { appColors, appRadius } from '../../constant'

import { AppButton } from '../../components/btn'
import { AppInput } from '../../components/inputs'
import { AppText } from '../../components/txt'
import { DateModal } from '../modals'
import { Fontisto } from '@expo/vector-icons';
import React from 'react'
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
                    value={hooks.state.taskName}
                    style={styles.inputStyle}
                    onChangeText={(value) => hooks.addingTaskToTodoList(value)}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }} >
                <View style={{ flexDirection: 'row' }} >
                    {priorityCompo('Low', { backgroundColor: appColors.yellow })}
                    {priorityCompo('Medium', { backgroundColor: appColors.secondary })}
                    {priorityCompo('High', { backgroundColor: appColors.orange })}
                </View>

                <TouchableOpacity onPress={() => hooks.handleShowDateModal(true)} >
                    <Fontisto name="date" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                {hooks.state.tasksList.length === 0 && <View style={styles.noDataContainer} ><NoData /></View>}

                {/* {
                    hooks.state.tasks.length !== 0 &&
                    <FlatList
                        data={hooks.state.tasks}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                        renderItem={({ item: value }) => {
                            return <TodoCard item={value}
                                onPress={hooks.handleActionOnTask}
                            />
                        }}
                    />
                } */}
            </View>

            {
                hooks.state.showDateModal &&
                <DateModal onSelectDate={hooks.handleShowDateModal}
                    closeModal={hooks.handleShowDateModal}
                />
            }
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