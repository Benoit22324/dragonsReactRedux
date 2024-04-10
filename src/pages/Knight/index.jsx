import { useSelector, useDispatch } from 'react-redux';
import { addError, addKnight, delKnight, updateAge, updateName } from '../../nest/action/knight';
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
        else if (name.trim() === '' && age.trim() === '') dispatch(addError('Veuillez saisir un nom et une age au chevalier'))
        else if (name.trim() === '' && age.trim() !== '') dispatch(addError('Veuillez saisir un nom au chevalier'))
        else if (name.trim() !== '' && age.trim() === '') dispatch(addError('Veuillez saisir une age au chevalier'))
        else if (barrack.filter((knight) => knight.name.toLowerCase() === name.trim().toLowerCase()).length > 0) dispatch(addError('Ce nom existe déjà !'))
    }

    return <>
        <h1>La caserne des chevaliers</h1>
        {error !== '' && <p className='errormsg'>{error}</p>}
        <div className='form'>
            <label>Nom:<input type="text" name="name" value={name} onChange={updatename} className='name_input' /></label>
            <label>Age:<input type="text" name='age' value={age} onChange={updateage} className='age_input' /></label>
            <button onClick={submit} className='submit_button'>Ajouter à la caserne</button>
        </div>
        {
            barrack.length > 0 ?
            barrack.map((knight, index) => <p key={index} className='knight_name'>{knight.name} | {knight.age} <button onClick={() => dispatch(delKnight(knight.id))} className='del_knight_button'>X</button></p>)
            :
            <p>Aucun chevalier dans la caserne</p>
        }
    </>
}

export default Knight