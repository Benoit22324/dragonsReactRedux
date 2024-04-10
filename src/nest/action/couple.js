import { COUPLES_CREATE, COUPLES_SETDRAGON, COUPLES_SETKNIGHT } from "../constant/action-type";

export const setKnight = (payload) => ({
    type: COUPLES_SETKNIGHT,
    payload,
})
export const setDragon = (payload) => ({
    type: COUPLES_SETDRAGON,
    payload,
})
export const createCouple = () => ({
    type: COUPLES_CREATE,
})