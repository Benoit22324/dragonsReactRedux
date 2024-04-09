const init = {
    dragons: [],
    id: 1,
    name: '',
}

const DragonReducer = (state = init, action) => {
    switch(action.type) {
        case 'NEST/UPDATEVAL': return {
            ...state,
            name: action.payload,
        }

        case 'NEST/ADDDRAGON': return {
            ...state,
            dragons: [...state.dragons, {id: state.id, name: state.name}],
            id: state.id + 1,
            name: '',
        }

        default: return state
    }
}

export default DragonReducer;