import Part from "./Part"
import Header from "./Header"
import Total from "../Total"
const Course = ({courses}) => {
    return (
        <>
        {courses.map((course) => (
        <div key={course.id}>
           <ul>   
     <Header course={course} />
   
     
                
        {course.parts.map((part, index) => (
            <Part key={index} part={part} />
          ))}      
     
    <Total course={course} />
    </ul> 
      </div>
       ))}
        </>
    )
}
export default Course;