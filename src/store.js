import { combineReducers, createStore } from "redux";
import users from "./core/reducers/UsersReducer"

const reducer = combineReducers({
    users
})

export const store = createStore(reducer)
