import {useSelector, useDispatch} from 'react-redux';
import { updateValue, addDragon, delDragon } from './nest/action/dragon';
import { selectDragonName, selectNest } from './nest/selector/dragon';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const value = useSelector(selectDragonName);
  const nest = useSelector(selectNest);

  const update = (e) => {
    dispatch(updateValue(e.target.value))
  }

  const submit = () => {
    if (value.trim() !== '' && nest.filter((dragon) => dragon.name === value).length === 0) dispatch(addDragon())
  }

  return (
    <>
      <input type="text" name='name' value={value} onChange={update} />
      <button onClick={submit}>Ajouter au nid</button>
      {
        nest.length > 0 ?
          nest.map((dragon, index) => <p key={index}>{dragon.name}<button onClick={() => dispatch(delDragon(dragon.name))}>Retirer</button></p>)
          :
          <p>Aucun Dragon dans le nid</p>
      }
    </>
  )
}

export default App
