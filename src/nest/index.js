import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import DragonReducer from './reducer/DragonReducer.js'
import KnightReducer from './reducer/KnightReducer.js';
import CoupleReducer from './reducer/CoupleReducer.js';
import { COUPLES_CREATE } from './constant/action-type.js';
import { updateCoupleD } from './action/dragon.js';
import {composeWithDevTools} from "redux-devtools-extension";
import { updateCoupleK } from './action/knight.js';

const MiddlewareChecker = (store) => (next) => (action) => {
    if(action.type === COUPLES_CREATE) {
        store.dispatch(updateCoupleD(store.getState().couple.dragon.id));
        store.dispatch(updateCoupleK(store.getState().couple.knight.id));
    }
    next(action);
}

const store = createStore(
    combineReducers({
        dragon: DragonReducer,
        knight: KnightReducer,
        couple: CoupleReducer,
    }),
    composeWithDevTools(
        applyMiddleware(MiddlewareChecker)
    )
)

export default store