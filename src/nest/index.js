import { combineReducers, legacy_createStore as createStore} from 'redux';
import DragonReducer from './reducer/DragonReducer.js'
import KnightReducer from './reducer/KnightReducer.js';

const store = createStore(
    combineReducers({
        dragon: DragonReducer,
        knight: KnightReducer,
    })
)

export default store