import { useEffect, useState } from "react"

export const useTodo = () => {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const addingTodo = (value) => {
        setTask(value)
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
            isDeleted: false
        }])

        setTask('')
    }

    useEffect(() => {
        console.log({ tasks })
    }, [tasks])

    return {
        task,
        tasks,
        setTask,
        addingTodo,
        handleTodoApp,
        handleActionOnTask,
    }
}