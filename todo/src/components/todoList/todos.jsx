import React from 'react';

import "./todos.css"
const ToDo=({lists,deleteLists})=>{
    return(
        <div className="todolist">
            <div className="todo">
                <ul>
                    {lists.map((item,index)=>(
                       <li key={index}> <input type="checkbox" />{item.title} <button onClick={()=>deleteLists(item.id)}></button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDo


















// const Todo = ({todo,delete}) => {
//     return (
//         <div className="todos">
//             <div className="toDo">
// <ul>
//     {todo.map((item,index)=>(

//         <li >
//             <input type="text" /> 
//             {item.title} <button onClick={()=>delete(item.id)}>X</button>
//         </li>
//     ))}
// </ul>

//             </div>
            
//         </div>
//     )
// }
// export default Todo






































// import React from 'react'
// import { useState } from 'react'

// let id=0
// const Todo = () => {
//     const [inputValue, setInputvalue]=useState("");
// const [lists,setLists]=useState([])
//     const handleInp=(e)=> {
//         setInputvalue(e.target.value)
//     }
//     const addList=(e)=>{
//         e.preventDefault();
//         setLists([...lists,{id:Date.now,title:inputValue}])
//         setInputvalue("")
//     }
        
    
//   return (

//     <section className='ToDo'>
//         <div className="todos">
//         <div className="todos_head">
//                 <h1>TODO</h1>
//                 <div className="icon"></div>
//             </div>
//             <div className="todos_body">
//             <form action="">
//                 <input type="text" onChange={handleInp} value={inputValue}/>
//                 <button onClick={addList}>add</button>

//                 <div className="todos_list">
//                 <ul>
//                     {lists.map((list)=>(
//                         <div className='item_list' key={list.id}>
//                         <li>{list.title}</li>
//                         <button className='dlt'>X</button>
//                         </div>
                        
//                     ))}
//                 </ul>
//                 </div>
               
//             </form>
//             </div>
           
//         </div>
//     </section>
//   )
// }

// export default Todo
