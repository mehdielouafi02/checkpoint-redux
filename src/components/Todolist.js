import React from 'react'
import{useSelector, useDispatch} from 'react-redux'
import {add,change,edit,remove} from '../Redux/actions/actions'
import {useState} from 'react'

const Todolist = () => {
    const todolist =  useSelector(state => state.todolist)
    const [inputvalue , setInput] =useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault ();
                dispatch(add(inputvalue));
                setInput('')

            }}>
            <input type="text"  value= {inputvalue} onChange={e=>setInput(e.target.value)}n/><button type="submit">ADD</button>
            </form>
            <ul>{
                todolist.map((el ,id)=> <li key={id}> {el} 
                <button onClick={()=>{
                    let newvalue = prompt('enter new value');
                  dispatch(edit(id, newvalue))
                  
                  }}>edit</button> 
                <button onClick={() => dispatch(remove(id))}>X</button> </li>)
                
                
                }
                
            </ul>

        </div>
    )
}

export default Todolist