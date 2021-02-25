import { SUCCESS, WARN, INFO, ERROR } from "./actionTypes";

export const successAction = (data) => {
    return {
        type: SUCCESS,
        data: data
    }
}

export const warningAction = (data) => {
    return {
        type: WARN,
        data: data
    }
}

export const errorAction = (data) => {
    return {
        type: ERROR,
        data: data
    }
}

export const infoAction = (data) => {
    return {
        type: INFO,
        data: data
    }
}