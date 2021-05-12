import {ACCEPTER , DECLINER  , VISIBILITY } from './actionsType'




export const accepter = () => {    

return { type:ACCEPTER}


}

 export const decliner =() => {  

return { type:DECLINER}



 }



 export const changeVisibility =() => {

return{ type: VISIBILITY}



}

