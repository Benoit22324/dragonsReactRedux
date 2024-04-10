import { COUPLES_SETDRAGON, COUPLES_SETKNIGHT, COUPLES_CREATE, COUPLES_ADDERROR } from "../constant/action-type"

const init = {
    couples: [],
    id: 1,
    knight: undefined,
    dragon: undefined,
    errmsg: '',
}

const CoupleReducer = (state = init, action) => {
    switch(action.type) {
        case COUPLES_SETKNIGHT: return {
            ...state,
            knight: action.payload,
            errmsg: '',
        }
        case COUPLES_SETDRAGON: return {
            ...state,
            dragon: action.payload,
            errmsg: '',
        }

        case COUPLES_CREATE: return {
            ...state,
            couples: [...state.couples, {id: state.id, knight: state.knight, dragon: state.dragon}],
            id: state.id + 1,
            knight: undefined,
            dragon: undefined,
            errmsg: '',
        }

        case COUPLES_ADDERROR: return {
            ...state,
            errmsg: action.payload,
        }

        default: return state
    }
}

export default CoupleReducer