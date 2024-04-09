import { useSelector, useDispatch } from "react-redux";
import { updateValue, addDragon, delDragon, addError } from "../../nest/action/dragon";
import { selectDragonName, selectError, selectNest } from "../../nest/selector/dragon";

const Dragon = () => {
	const dispatch = useDispatch();
	const value = useSelector(selectDragonName);
	const nest = useSelector(selectNest);
	const error = useSelector(selectError);

	const update = (e) => {
		dispatch(updateValue(e.target.value));
	};

	const submit = () => {
		if (
			value.trim() !== "" &&
			nest.filter((dragon) => dragon.name.toLowerCase() === value.toLowerCase()).length === 0
		)
			dispatch(addDragon());
		else if (value.trim() === "") dispatch(addError("Veuillez saisir un nom pour le Dragon"));
		else if (nest.filter((dragon) => dragon.name.toLowerCase() === value.toLowerCase()).length > 0)
			dispatch(addError("Ce nom existe déjà !"));
	};

	return (
		<>
			<h1>Le nid des dragons</h1>
			{error !== "" && <p className="errormsg">{error}</p>}
			<input type="text" name="name" value={value} onChange={update} className="name_input" />
			<button onClick={submit} className="submit_button">
				Ajouter au nid
			</button>
			{nest.length > 0 ? (
				nest.map((dragon, index) => (
					<p className="dragon_name" key={index}>
						{dragon.name}
						<button className="del_dragon_button" onClick={() => dispatch(delDragon(dragon.name))}>
							Retirer
						</button>
					</p>
				))
			) : (
				<p>Aucun Dragon dans le nid</p>
			)}
		</>
	);
};

export default Dragon;
