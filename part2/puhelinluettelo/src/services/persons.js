import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
  }

const createPerson = (newPerson) => {
    const request = axios.post(baseUrl,newPerson)
    return request.then(response => response.data)
}

const removeItem = (id) => {
  axios.delete(`http://localhost:3001/persons/${id}`) 
}

const updatePersonPhone = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

  export default {
    getPersons: getPersons,
    createPerson: createPerson,
    removeItem: removeItem,
    updatePersonPhone:updatePersonPhone
}