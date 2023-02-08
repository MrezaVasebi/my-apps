import { useState } from "react"

export const useTodo = () => {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [priority, setPriority] = useState('Low')

    const addingTaskToTodoList = (value) => {
        if (value.length === 0) return
        else setTask(value)
    }

    const addingPriorityToTask = (priorityName) => {
        setPriority(priorityName)
    }

    const handleActionOnTask = (actionType, id) => {
        if (actionType === 'isDone') {
            let newData = tasks.map(el => {
                return el.id === id ? { ...el, isDone: !el.isDone } : { ...el }
            })
            setTasks(newData)
        }
        else if (actionType === 'isDeleted') {
            let newData = tasks.filter(el => el.id !== id)
            setTasks(newData)
        }
    }

    const handleTodoApp = () => {
        setTasks([...tasks, {
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            label: task,
            isDone: false,
            priority: priority,
        }])

        setTask('')
        setPriority('Low')
    }

    return {
        task,
        tasks,
        setTask,
        handleTodoApp,
        handleActionOnTask,
        addingPriorityToTask,
        addingTaskToTodoList,
    }
}