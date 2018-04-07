import axios from 'axios'

// export function allUsers(){
//   return {
//     type: "ALL_USERS",
//     payload: [
//       {id: 1, username: "beni_cool"},
//       {id: 2, username: "bryan_cool"},
//       {id: 3, username: "gofur_cool"},
//     ]
//   }
// }

export function allUsers(){
  return {
    type: "ALL_USERS",
    payload: axios.get('http://rest.learncode.academy/api/bryan_cool/users')
  }
}

export function getUser(){
  return {}
}

export function createUser(data){
  return {
    type: "CREATE_USER",
    payload: axios.post('http://rest.learncode.academy/api/bryan_cool/users', data)
  }
}
