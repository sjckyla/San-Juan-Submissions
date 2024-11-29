const Total = ({ parts }) => {
    const total = parts.reduce((sum, parts) => sum + parts.exercises, 0)
    return <p><strong>Total of {total} exercises</strong></p>
  }

export default Total 
