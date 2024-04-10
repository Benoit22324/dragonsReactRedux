import { BARRACK_ADDERROR, BARRACK_ADDKNIGHT, BARRACK_DELKNIGHT, BARRACK_UPDATEAGE, BARRACK_UPDATECOUPLE, BARRACK_UPDATENAME } from "../constant/action-type"

const init = {
    knights: [],
    id: 1,
    name: '',
    age: '',
    errmsg: '',
}

const KnightReducer = (state = init, action) => {
    switch(action.type) {
        case BARRACK_UPDATENAME: return {
            ...state,
            name: action.payload,
            errmsg: '',
        }
        case BARRACK_UPDATEAGE: return {
            ...state,
            age: action.payload,
            errmsg: '',
        }

        case BARRACK_ADDKNIGHT: return {
            ...state,
            knights: [...state.knights, {id: state.id, name: state.name.trim(), age: state.age.trim(), couple: false}],
            id: state.id + 1,
            name: '',
            age: '',
            errmsg: '',
        }
        case BARRACK_DELKNIGHT: return {
            ...state,
            knights: state.knights.filter((knight) => knight.id !== action.payload)
        }

        case BARRACK_UPDATECOUPLE: return {
            ...state,
            knights: state.knights.map((knight) => knight.id === action.payload ? {...knight, couple: true} : knight)
        }

        case BARRACK_ADDERROR: return {
            ...state,
            errmsg: action.payload,
        }

        default: return state
    }
}

export default KnightReducer