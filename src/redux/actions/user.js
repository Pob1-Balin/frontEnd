import { ADD_USER } from "./action-types"

/**
 * @param userData
 * @return object
 */
export const addUser = (userData) => {
    return {type: ADD_USER, payload: {name: userData.name, age: userData.age}}
}

