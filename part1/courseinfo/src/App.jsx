const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.content[0].part} exercises={props.content[0].exercises}/>
            <Part part={props.content[1].part} exercises={props.content[1].exercises}/>
            <Part part={props.content[2].part} exercises={props.content[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.total[0] + props.total[1] + props.total[2]}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course}/>
            <Content content={[
                {part: part1.name, exercises: part1.exercises},
                {part: part2.name, exercises: part2.exercises},
                {part: part3.name, exercises: part3.exercises}]}/>
            <Total total={[part1.exercises, part2.exercises, part3.exercises]}/>
        </div>
    )
}

export default App