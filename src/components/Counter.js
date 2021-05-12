import React from 'react'
import { useSelector ,  useDispatch} from  'react-redux'
import { accepter, decliner } from '../Redux/actions/actions'

const Counter = () => {
var count = useSelector (state =>  state.count )

const dispatch =useDispatch()
    return (
        <div>
            <button type="button" onClick={()=>dispatch(accepter())} class="btn btn-success">+</button>
            <span style={ {margin: "  0 20px"}}>{count}</span>
            <button type="button" onClick={()=>count=0 ? dispatch(decliner()) : alert('stop!!')} class="btn btn-danger">-</button>
            
        </div>
    )
}

export default Counter
