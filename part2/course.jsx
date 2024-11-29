import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
  return (
    <div>
      {course.map((otherCourse) => (
        <div key={otherCourse.id}>
          <Header name={otherCourse.name} />
          <Content parts={otherCourse.parts} />
          <Total parts={otherCourse.parts} />
        </div>
      ))}
    </div>
  )
}

export default Course
