import { BARRACK_ADDERROR, BARRACK_ADDKNIGHT, BARRACK_UPDATEAGE, BARRACK_UPDATENAME } from "../constant/action-type"

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
            knights: [...state.knights, {id: state.id, name: state.name, age: state.age}],
            id: state.id + 1,
            name: '',
            age: '',
            errmsg: '',
        }

        case BARRACK_ADDERROR: return {
            ...state,
            errmsg: action.payload,
        }

        default: return state
    }
}

export default KnightReducer