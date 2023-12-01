import { useState,useEffect } from 'react'
import Filter from "./Filter"
import AddPersonsForm from './AddPersonForm'
import Persons from './Persons'
import personService from './services/persons'
import Notification from './Notification'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPerson, setFilteredPerson] = useState('')
  const [message, setMessage] = useState(null)

useEffect(() => {
  personService
  .getPersons()
    .then(initialPersons => {
    setPersons(initialPersons)
    console.log(initialPersons)
  })
}, [])


  const addPerson = (event) => {
    event.preventDefault();

  

    const nameAllreadyExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
    
    if (nameAllreadyExists){
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`);

    if(confirmUpdate){
      const updatedNumber = {...nameAllreadyExists, number: newNumber};
      personService
      .updatePersonPhone(nameAllreadyExists.id,updatedNumber)
      .then((returnedPerson) => {
        setPersons(persons.map(person => person.id !== nameAllreadyExists.id? person: returnedPerson));
        setMessage({
          category:'succesfull',
          message:  `'${nameAllreadyExists.name}' phonenumber was succesfully updated.`
      })
        setTimeout(() => {
          setMessage(null)
        }, 3000)
        setNewName('')
        setNewNumber('')
      })
      .catch((error) => {
        console.log("Error updating the number",error)
        setMessage({
          category: 'error',
          message:`ERROR ${nameAllreadyExists.name} has already been removed from the server`
      })
        setTimeout(() => {
          setMessage(null)
        }, 3000) 
      
      });
    }
    } else {
    const newPersons = {
      name: newName,
      number: newNumber,
    }
    personService.createPerson(newPersons)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setMessage({
        category: 'succesfull',
        message:`'${returnedPerson.name}' was added to the phonebook.`
    })
      setTimeout(() => {
        setMessage(null)
      }, 3000)
      setNewName('')
      setNewNumber('')
    }).catch((error) => {
     
      setMessage({
        category: 'error',
        message: `${error.response.data.error}`
    })
    setTimeout(() => {
      setMessage(null)
    }, 3000)
    });
  }
  
  };

  const removePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if (!personToDelete) return;
    if (window.confirm(`Do you really want to delete ${personToDelete.name}?`)) {
   personService.removeItem(id)
   setMessage({
    category:'succesfull',
    message:`'${personToDelete.name}' was deleted from the phonebook.`
   })
  setTimeout(() => {
    setMessage(null)
  }, 3000)
   const updatedPersons = persons.filter(person => person.id !== id)
   setPersons(updatedPersons)
  }else{
    return
  }
    
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }
const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}
const handlePersonFilter = (event) => {
  setFilteredPerson(event.target.value)
}
const personsToShow = 
    persons.filter(person => person.name?.toLowerCase()?.includes(filteredPerson?.toLowerCase()))

 
  return (
    <div>
      <h2>Phonebook</h2>
      {message && <Notification message={message} /> }
      <Filter handlePersonFilter={handlePersonFilter} value={filteredPerson}/>
      <h3>Add a new</h3>
      <AddPersonsForm  addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
     
    </div>
  )

}


export default App;