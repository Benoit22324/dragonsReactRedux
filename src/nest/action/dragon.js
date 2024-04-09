import { NEST_UPDATEVAL, NEST_ADDDRAGON, NEST_DELDRAGON } from "../constant/action-type";

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