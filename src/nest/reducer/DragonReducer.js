import { NEST_UPDATEVAL, NEST_ADDDRAGON, NEST_DELDRAGON } from '../constant/action-type.js'

const init = {
    dragons: [],
    id: 1,
    name: '',
}

const DragonReducer = (state = init, action) => {
    switch(action.type) {
        case NEST_UPDATEVAL: return {
            ...state,
            name: action.payload,
        }

        case NEST_ADDDRAGON: return {
            ...state,
            dragons: [...state.dragons, {id: state.id, name: state.name}],
            id: state.id + 1,
            name: '',
        }

        case NEST_DELDRAGON: return {
            ...state,
            dragons: state.dragons.filter((dragon) => dragon.name !== action.payload)
        }

        default: return state
    }
}

export default DragonReducer;