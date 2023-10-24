const Person = ({person, id, removePerson}) => {
    return(
        <div>
<p key={id}> {person.name} {person.number} <button onClick={()=>removePerson(person.id)} >Delete</button></p> 
        </div>
    )
}

export default Person