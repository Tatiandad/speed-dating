export const USER_NAME = 'USER_NAME'

export function setUserName (name) {
  return {
    type: USER_NAME,
    name,
  }
}