const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course.name}</h1>
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
            <Part part={props.content[0].name} exercises={props.content[0].exercises}/>
            <Part part={props.content[1].name} exercises={props.content[1].exercises}/>
            <Part part={props.content[2].name} exercises={props.content[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Content content={course.parts}/>
            <Total total={course.parts}/>
        </div>
    )
}

export default App