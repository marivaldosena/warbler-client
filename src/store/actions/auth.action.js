import { apiCall, setTokenHeader } from '../../services/api.service'
import { SET_CURRENT_USER } from '../actionTypes'
import { addError, removeError } from './errors.action'

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const setAuthorizationToken = (token) => {
    setTokenHeader(token)
}

export const logout = () => (dispatch) => {
    localStorage.clear()
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}))
}

export const authUser = (type, userData) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return apiCall('post', `/api/auth/${type}`, userData)
            .then(({ token, ...user }) => {
                localStorage.setItem('jwtToken', token)
                setAuthorizationToken(token)
                dispatch(setCurrentUser(user))
                dispatch(removeError())
                resolve()
            })
            .catch(err => {
                dispatch(addError(err.message))
                reject()
            })
    })
}