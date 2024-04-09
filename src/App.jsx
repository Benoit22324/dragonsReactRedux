import {useSelector, useDispatch} from 'react-redux';
import { updateValue, addDragon, delDragon, addError } from './nest/action/dragon';
import { selectDragonName, selectError, selectNest } from './nest/selector/dragon';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const value = useSelector(selectDragonName);
  const nest = useSelector(selectNest);
  const error = useSelector(selectError);

  const update = (e) => {
    dispatch(updateValue(e.target.value))
  }

  const submit = () => {
    if (value.trim() !== '' && nest.filter((dragon) => dragon.name === value).length === 0) dispatch(addDragon())
    else if (value.trim() === '') dispatch(addError('Veuillez saisir un nom'))
    else if (nest.filter((dragon) => dragon.name === value).length > 0) dispatch(addError('Ce nom existe déjà !'))
  }

  return (
    <>
      {
        error !== '' && <p>{error}</p>
      }
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
