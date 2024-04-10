import { BARRACK_ADDERROR, BARRACK_ADDKNIGHT, BARRACK_DELKNIGHT, BARRACK_UPDATEAGE, BARRACK_UPDATENAME } from "../constant/action-type";

export const updateName = (payload) => ({
    type: BARRACK_UPDATENAME,
    payload,
})
export const updateAge = (payload) => ({
    type: BARRACK_UPDATEAGE,
    payload,
})
export const addKnight = () => ({
    type: BARRACK_ADDKNIGHT,
})
export const addError = (payload) => ({
    type: BARRACK_ADDERROR,
    payload,
})
export const delKnight = (payload) => ({
    type: BARRACK_DELKNIGHT,
    payload,
})