const Person = ({person, id}) => {
    return(
        <div>
<p key={id}> {person.name} {person.number}</p>
        </div>
    )
}

export default Person