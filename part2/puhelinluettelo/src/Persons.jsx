import Person from "./Person"

const Persons = ({personsToShow,removePerson}) => {
    return (
        <div>
            {personsToShow.map((person, id) => (
        <Person key={id} person={person} removePerson={removePerson} />
      ))}
     
        </div>
    )
}

export default Persons