import { legacy_createStore as createStore} from 'redux';
import DragonReducer from './reducer/DragonReducer.js'

const nest = createStore(
    DragonReducer
)

nest.subscribe(() => console.log(nest.getState()))

export default nest