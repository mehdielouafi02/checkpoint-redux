import './App.css';
import Counter from './components/Counter'
import {useSelector,useDispatch} from 'react-redux'
import {changeVisibility} from'./Redux/actions/actions'
import {connect}from 'react-redux'
function App() {

var display = useSelector (state=> state.display)
const dispatch =useDispatch()
  return (
    <div className="App">
      <button onClick={()=> dispatch(changeVisibility() )}> { display ? "Hide Counter" : "Show Counter"}</button>

    {display ?


      <Counter/> :""
    }      
    </div>
  );
}


const mapStateToProps =state => {

return {

display : state.display
}

}

const mapStateToDispatch = dispatch => {
  return {
    changeVisibility :() => dispatch(changeVisibility())
  }
}




export default connect(mapStateToProps, mapStateToDispatch) (App);
