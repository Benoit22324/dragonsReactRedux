import { useSelector, useDispatch } from "react-redux";
import { selectNest } from "../../nest/selector/dragon";
import { selectBarrack } from "../../nest/selector/knight";
import { selectCouples, selectDragon, selectKnight } from "../../nest/selector/couple";
import { createCouple, setDragon, setKnight } from "../../nest/action/couple";

const Couple = () => {
    const dispatch = useDispatch();
    const nest = useSelector(selectNest);
    const barrack = useSelector(selectBarrack);
    const couples = useSelector(selectCouples);

    const knight = useSelector(selectKnight);
    const dragon = useSelector(selectDragon);

    const create = () => {
        if (knight !== undefined && dragon !== undefined) dispatch(createCouple())
    }

    return <>
        <div className="couple_section">
            <div className="unit_list">
                <h2>Nid des dragons</h2>
                {
                    nest.length > 0 ?
                    nest.map((drag, index) =>
                        drag.couple ?
                        <p key={index} className="disabled">{drag.name}</p>
                        :
                        drag.id === dragon.id ?
                            <p key={index} className="activated unit_list_selected" onClick={() => dispatch(setDragon(drag))}>{drag.name}</p>
                            :
                            <p key={index} className="activated" onClick={() => dispatch(setDragon(drag))}>{drag.name}</p>
                    )
                    :
                    <p>Il n'y a pas de dragon dans le nid</p>
                }
            </div>
            <div className="unit_list">
                <h2>Caserne des chevaliers</h2>
                {
                    barrack.length > 0 ?
                    barrack.map((kni, index) =>
                        kni.couple ?
                        <p key={index} className="disabled">{kni.name}</p>
                        :
                        kni.id === knight.id ? 
                            <p key={index} className="activated unit_list_selected" onClick={() => dispatch(setKnight(kni))}>{kni.name}</p>
                            :
                            <p key={index} className="activated" onClick={() => dispatch(setKnight(kni))}>{kni.name}</p>
                    )
                    :
                    <p>Il n'y a pas de chevalier dans la caserne</p>
                }
            </div>
        </div>
        <div className="couple_creation_zone">
            {
                dragon !== undefined && <p>Dragon: <span className="selected_unit">{dragon.name}</span></p>
            }
            <button onClick={create} className="submit_button">Crée le couple</button>
            {
                knight !== undefined && <p>Chevalier: <span className="selected_unit">{knight.name}</span></p>
            }
        </div>
        {
            couples.length > 0 &&
            <div>
                <h2>Les couples Dragon/Chevalier</h2>
                {
                    couples.map((couple, index) => <p key={index}>{couple.dragon.name} x {couple.knight.name}</p>)
                }
            </div>
        }
    </>
}

export default Couple