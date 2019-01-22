import { combineReducers } from 'redux'
import currentUser from './currentUser.reducer'
import errors from './error.reducer'
import messages from './messages.reducer'

const rootReducer = combineReducers({
    currentUser,
    errors,
    messages
})

export default rootReducer