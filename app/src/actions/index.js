const requestDataFromAPI = () => ({
  type: 'REQUEST_DATA'
})

const recieveDataFromAPI = (data) => ({
  type: 'RECIEVE_DATA',
  data
})


const recieveDataFromServer = (users) => ({
  type: 'RECIEVE_USERS',
  users
})


export const fetchDataFromApi = () => {
  return dispatch => {
    dispatch(requestDataFromAPI())

    fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(json => dispatch(recieveDataFromAPI(json.results)))
    .catch(ex => console.log('parsing failed', ex))
  }
}

export const saveUser = (username, age, location) => {
  return dispatch => {
    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        age,
        location
      })
    })
    .then(response => response.json())
    .then(users => dispatch(recieveDataFromServer(users)))
  }
}
