import { NEST_UPDATEVAL, NEST_ADDDRAGON, NEST_DELDRAGON, NEST_ADDERROR } from "../constant/action-type";

export const updateValue = (payload) => ({
    type: NEST_UPDATEVAL,
    payload,
})
export const addDragon = () => ({
    type: NEST_ADDDRAGON,
})
export const delDragon = (payload) => ({
    type: NEST_DELDRAGON,
    payload,
})
export const addError = (payload) => ({
    type: NEST_ADDERROR,
    payload,
})