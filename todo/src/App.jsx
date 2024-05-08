import { useState,useEffect } from 'react'
import React from 'react'
import ToDo from "./components/todoList/todos"
import './App.css'

let id=0
function App() {
const [inpVal, setInpVal]=useState("")

const [lists, setLists]=useState(localStorage.getItem("lists")? JSON.parse(localStorage.getItem("lists")) :[])

useEffect(()=>{
  localStorage.setItem("lists", JSON.stringify(lists))
},[lists])
 

const addList=()=> {
  setLists([...lists,{id:id, title:inpVal}])
 
  setInpVal("")
  id++
}


const deleteLists=(id)=> {
  setLists(lists.filter(list=>list.id!==id))
}

return(
  <div className="contain">
    <h1>TODO</h1>
    <div className="form">
    <input type="text" placeholder='add a new todo' value={inpVal} onChange={(e)=>{setInpVal(e.target.value)}}/>
    <button onClick={addList}>Add</button>
  </div>

   <ToDo lists={lists} deleteList={deleteLists}/>
  </div>
)

}

export default App
