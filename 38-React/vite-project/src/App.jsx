import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowTemperature from './components/ShowTemperature'

function App() {
  
  const addToDoHandler = (todoTet) => {
    setTodoList([...todoList, todoText])
    toast.success("New todo successfully added")
  }

  const deleteHandler = (index) => {
    setTodoList(todoList.splice(index, 1))
    toast.success("New todo successfully deleted")
  }

  return (
    <>
     <ShowTemperature temp={28} />
     <Card style={{width: 600, marginInLine: 'auto'}}
        <TodoForm onAddToDo={addToDoHandler} />
        <TodoList list={todoList} onDelete={deleteHandler} />
      </Card>
      <ToastContainer />
      </>
  )
}  