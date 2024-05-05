import Header from "./Header"
import Content from "./Content"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'

  return (
    <div>
      <Header course={course}/>
      <Content content={part1}/>
    </div>
  )
}

export default App