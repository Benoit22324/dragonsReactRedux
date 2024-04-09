import { useSelector, useDispatch } from 'react-redux';
import { addKnight, updateAge, updateName } from '../../nest/action/knight';
import { selectBarrack, selectError, selectKnightAge, selectKnightName } from '../../nest/selector/knight';

const Knight = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectKnightName);
    const age = useSelector(selectKnightAge);
    const error = useSelector(selectError);
    const barrack = useSelector(selectBarrack);

    const updatename = (e) => {
        dispatch(updateName(e.target.value));
    }
    const updateage = (e) => {
        dispatch(updateAge(e.target.value));
    }

    const submit = () => {
        if (name.trim() !== '' && barrack.filter((knight) => knight.name.toLowerCase() === name.toLowerCase()).length === 0 && age !== '') dispatch(addKnight())
        else if (name.trim() === '' && age.trim() === '') dispatch()
    }

    return <>
        <h1>La caserne des chevaliers</h1>
        {error !== '' && <p className='errormsg'>{error}</p>}
        <input type="text" name="name" value={name} onChange={updatename}/>
        <input type="text" name='age' value={age} onChange={updateage} />
        <button onClick={submit}>Ajouter à la caserne</button>
        {
            barrack.length > 0 ?
            barrack.map((knight, index) => <p key={index}>{knight.name} | {knight.age}</p>)
            :
            <p>Aucun chevalier dans la caserne</p>
        }
    </>
}

export default Knight