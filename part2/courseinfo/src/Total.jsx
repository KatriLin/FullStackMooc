const Total = ({ course }) => {
   
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);

   
    return (
      <p>Total of {total} exercises</p>
    )
  }
  
  export default Total