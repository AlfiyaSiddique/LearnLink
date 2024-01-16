import { ActionType } from "../action-types"
import { User, UserActionType } from "../actions"

const initialState: User = {
    name: "",
    email: "",
    password: ""
}
const reducer = (state: User = initialState, action: UserActionType)=>{
    switch (action.type){
        case ActionType.USER_LOGIN:
            return action.payload.data
        case ActionType.USER_SIGNUP:
            return action.payload.data
        default:
            return state
    }
}


export default reducer
