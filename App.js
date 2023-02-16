import { MainScreen } from './components'
import React from 'react'
import { Todo } from './screen/todo'

const App = () => {
  return (
    <MainScreen>
      <Todo />
    </MainScreen>
  )
}

export default App