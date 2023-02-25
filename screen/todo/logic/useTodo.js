import { useReducer } from "react"

export const useTodo = () => {

    const initialState = {
        taskName: '',
        tasksList: [],
        priority: 'Low',
    }

    const set_task_name = (value) => ({ type: 'TASK_NAME', payload: value })
    const set_tasks_list = (value) => ({ type: 'TASKS_LIST', payload: value })
    const set_priority = (value) => ({ type: 'PRIORITY', payload: value })

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'TASK_NAME':
                return { ...state, taskName: action.payload }
            case 'TASKS_LIST':
                return { ...state, tasksList: action.payload }
            case 'PRIORITY':
                return { ...state, priority: action.payload }
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState)

    const addingTaskToTodoList = (value) => {
        if (value.length === 0) dispatch(set_task_name())
        else dispatch(set_task_name(value))
    }

    const addingPriorityToTask = (priorityName) => {
        dispatch(set_priority(priorityName))
    }

    const handleActionOnTask = (actionType, id) => {
        if (actionType === 'isDone') {
            let newData = state.tasksList.map(el => {
                return el.id === id ? { ...el, isDone: !el.isDone } : { ...el }
            })
            dispatch(set_tasks_list(newData))
        }
        else if (actionType === 'isDeleted') {
            let newData = state.tasksList.filter(el => el.id !== id)
            dispatch(set_tasks_list(newData))
        }
    }

    const handleTodoApp = () => {
        if (state.taskName === '') return

        if (state.tasksList.length !== 0) {
            // let isExisted = state.tasksList.filter(el => el.label === state.taskName)
            // if (isExisted.length !== 0) return

            let isExisted = state.tasksList.every(el => el.label === state.taskName)
            if (isExisted) return
        }

        dispatch(set_tasks_list([...state.tasksList, {
            id: state.tasksList.length === 0 ? 1 : state.tasksList[state.tasksList.length - 1].id + 1,
            isDone: false,
            label: state.taskName,
            priority: state.priority,
        }]))

        dispatch(set_task_name(''))
        dispatch(set_priority('Low'))
    }

    return {
        state,
        handleTodoApp,
        handleActionOnTask,
        addingPriorityToTask,
        addingTaskToTodoList,
    }
}