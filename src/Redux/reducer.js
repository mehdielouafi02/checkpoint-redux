import {ADD ,REMOVE, EDIT} from './actions/actionsType'

const initialState ={
    todolist:[]
}
const reducer = (state=initialState ,action) => {
    switch (action.type){
        case ADD : return {todolist : [...state.todolist, action.payload]}
        case REMOVE : return {todolist : state.todolist.filter((el,id)=> id !==action.payload)}
        case EDIT : return {todolist : state.todolist.map((el,id)=> id === action.payload.id ? el =action.payload.newvalue :el)}
        default : return state
    }
}
export default reducer