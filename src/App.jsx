import {useSelector, useDispatch} from 'react-redux';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.name);
  const nest = useSelector((state) => state.dragons);

  const update = (e) => {
    dispatch({type: 'NEST/UPDATEVAL', payload: e.target.value})
  }

  const submit = () => {
    if (value.trim() !== '') dispatch({type: 'NEST/ADDDRAGON'})
  }

  return (
    <>
      <input type="text" name='name' value={value} onChange={update} />
      <button onClick={submit}>Ajouter au nid</button>
      {
        nest.length > 0 && nest.map((dragon, index) => <p key={index}>{dragon.name}</p>)
      }
    </>
  )
}

export default App
