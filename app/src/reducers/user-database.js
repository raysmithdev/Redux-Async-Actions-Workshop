const initialState = {
  users: []
}

const userDatabase = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_USERS':
      return {
        ...state,
        users: action.users
      }

    default:
      return state
  }
}

export default userDatabase
