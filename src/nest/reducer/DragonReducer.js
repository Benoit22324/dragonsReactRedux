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

        default: return state
    }
}

export default DragonReducer;