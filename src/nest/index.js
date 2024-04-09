import { legacy_createStore as createStore} from 'redux';
import DragonReducer from './reducer/DragonReducer.js'

const nest = createStore(
    DragonReducer
)

export default nest