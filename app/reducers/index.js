import { USER_NAME } from '../actions'

export default function users (state = {}, action) {
  switch (action.type) {
    case USER_NAME :
      return {
        ...state,
        name: action.name,
      }
    default :
      return state
  }
}