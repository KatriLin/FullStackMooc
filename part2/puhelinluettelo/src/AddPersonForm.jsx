const AddPersonsForm = ({addPerson, newName,newNumber, handleNameChange,handleNumberChange}) => {
    return (
        <div>
            <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange}
          />
          <div>
           number: <input value={newNumber}
            onChange={handleNumberChange} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

        </div>
    )
}

export default AddPersonsForm