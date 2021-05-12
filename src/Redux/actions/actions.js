import {ADD , REMOVE, EDIT} from './actionsType'


export const add = (newtask) =>{
    return {type:ADD ,payload:newtask}
}
export const remove = (id) =>{
    return {type:REMOVE ,payload:id}
}
export const edit =(id ,newvalue)=> {
    return {type:EDIT ,payload:{id,newvalue}}
}