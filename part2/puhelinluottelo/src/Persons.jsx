import Person from "./Person"

const Persons = ({personsToShow}) => {
    return (
        <div>
            {personsToShow.map((person, id) => (
        <Person key={id} person={person} />
      ))}
     
        </div>
    )
}

export default Persons