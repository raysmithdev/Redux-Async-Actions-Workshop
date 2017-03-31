const initialState = {
  data: [],
  loading: false
}

const userAPI = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        loading: true
      }

    case 'RECIEVE_DATA':
      return {
        ...state,
        loading: false,
        data: action.data
      }

    default:
      return state
  }
}

export default userAPI
