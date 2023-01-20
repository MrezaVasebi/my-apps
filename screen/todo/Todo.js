import { FlatList, StyleSheet, View } from 'react-native'
import { MainScreen, NoData } from '../../components'

import { AppButton } from '../../components/btn'
import { AppInput } from '../../components/inputs'
import { AppText } from '../../components/txt'
import React from 'react'
import { TodoCard } from './components'
import { useTodo } from './logic'

const Todo = () => {

    const hooks = useTodo()

    return (
        <MainScreen rootStyle={{ padding: 10 }} >
            <AppText type={'title'} label='Todo' />

            <View style={styles.addingContainer} >
                <AppButton
                    label={'Add'}
                    onPress={hooks.handleTodoApp}
                />

                <AppInput
                    value={hooks.task}
                    style={styles.inputStyle}
                    onChangeText={(value) => hooks.addingTodo(value)}
                />
            </View>

            <View style={{ flex: 1 }}>
                {hooks.tasks.length === 0 && <View style={styles.noDataContainer} ><NoData /></View>}

                {
                    hooks.tasks.length !== 0 &&
                    <FlatList
                        data={hooks.tasks}
                        keyExtractor={(item, index) => index.toString()}
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
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    inputStyle: {
        flex: 1,
        marginRight: 10
    },
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})