const Filter = ({filteredPerson,handlePersonFilter}) => {

    
    return (
        <div>
        filter show with
      <input  value={filteredPerson}
      onChange={handlePersonFilter} />
      </div>
        
    )
}

export default Filter;