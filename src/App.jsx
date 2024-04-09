import {useSelector, useDispatch} from 'react-redux';
import './App.css'

function App() {
  const value = useSelector((state) => state.name)

  const update = (e) => {
    dispatch({type: 'NEST/UPDATEVAL', payload: e.target.value})
  }

  return (
    <>
      <input type="text" name='name' value={value} onChange={update} />
    </>
  )
}

export default App
