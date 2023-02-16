import { useEffect, useReducer } from "react"

export const useTodo = () => {

    const initialState = {
        taskName: '',
        tasksList: [],
        priority: 'Low',
        showDateModal: false,
        taskDate: '',
    }

    const set_task_name = (value) => ({ type: 'TASK_NAME', payload: value })
    const set_tasks_list = (value) => ({ type: 'TASKS_LIST', payload: value })
    const set_priority = (value) => ({ type: 'PRIORITY', payload: value })
    const set_show_date_modal = (value) => ({ type: 'SHOW_DATE_MODAL', payload: value })
    const set_task_date = (value) => ({ type: 'TASK-DATE', payload: value })

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'TASK_NAME':
                return { ...state, taskName: action.payload }
            case 'TASKS_LIST':
                return { ...state, tasksList: action.payload }
            case 'PRIORITY':
                return { ...state, priority: action.payload }
            case 'SHOW_DATE_MODAL':
                return { ...state, showDateModal: action.payload }
            case 'TASK_DATE':
                return { ...state, taskDate: action.payload }
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState)

    const addingTaskToTodoList = (value) => {
        if (value.length === 0) return
        else dispatch(set_task_name(value))
    }

    const addingPriorityToTask = (priorityName) => {
        dispatch(set_priority(priorityName))
    }

    const handleActionOnTask = (actionType, id) => {
        if (actionType === 'isDone') {
            let newData = state.tasksList.tasks.map(el => {
                return el.id === id ? { ...el, isDone: !el.isDone } : { ...el }
            })
            dispatch(set_tasks_list(newData))
        }
        else if (actionType === 'isDeleted') {
            let newData = state.tasksList.tasks.filter(el => el.id !== id)
            dispatch(set_tasks_list(newData))
        }
    }

    const handleTodoApp = () => {
        if (state.taskName === '') return

        if (state.tasksList.length === 0) {
            let data = {
                taskDate: state.taskDate,
                tasks: [
                    {
                        id: 1,
                        isDone: false,
                        label: state.taskName,
                        priority: state.priority,
                    }
                ]
            }

            dispatch(set_tasks_list([...state.tasksList, data]))
        }
        else {
            let data = [...state.tasksList]
            data.forEach(element => {
                if (element.taskDate === state.taskDate) {
                    element.tasks.push({
                        isDone: false,
                        label: state.taskName,
                        priority: state.priority,
                        id: element.tasks[element.tasks.length - 1].id + 1,
                    })
                }
                else {
                    data.push({
                        taskDate: state.taskDate,
                        tasks: [
                            {
                                id: 1,
                                isDone: false,
                                label: state.taskName,
                                priority: state.priority,
                            }
                        ]
                    })
                }
            })

            dispatch(set_tasks_list([...state.tasksList, data]))
        }

        dispatch(set_task_name(''))
        dispatch(set_task_date(''))
        dispatch(set_priority('Low'))
    }

    useEffect(() => {
        console.log(JSON.stringify({ ...state.tasksList }))
    }, [state])

    const handleShowDateModal = (value, taskDate = null) => {
        dispatch(set_show_date_modal(value))

        if (taskDate !== null) dispatch(set_task_date(taskDate))
    }

    return {
        handleShowDateModal,
        state,
        handleTodoApp,
        handleActionOnTask,
        addingPriorityToTask,
        addingTaskToTodoList,
    }
}