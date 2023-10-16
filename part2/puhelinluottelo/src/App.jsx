import { useState } from 'react'
import Filter from "./Filter"
import AddPersonsForm from './AddPersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPerson, setFilteredPerson] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameAllreadyExists = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
    if (nameAllreadyExists){
      alert(`${newName} is already added to phonebook`)
    } else {
    const newPersons = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(newPersons))
    setNewName("")
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
    persons.filter((person) => person.name.toLowerCase().includes(filteredPerson.toLowerCase())
    );
  
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter handlePersonFilter={handlePersonFilter} />
      <h3>Add a new</h3>
      <AddPersonsForm  addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow}/>
     
    </div>
  )

}

export default App;