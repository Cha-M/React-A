import React, {useState} from "react";

// class App extends React.Component {
//     state = {
//         persons: [
//             {name: "Kei", colour: "Red"},
//             {name: "Yuri", colour: "Black"}
//         ]
//     }

//     render() {
//         return (
//             <div>
//                 <h1>I'm a class component</h1>
//                 <Person />
//                 <Person />
//                 <Person />

//             </div>
//         )
//     }
// }

const State = () => {
    const [count0, setCount0] = useState(0);
    const [persons, setPersons] = useState(
        [
             {name: "Kei", colour: "Red"},
             {name: "Yuri", colour: "Black"}
        ]
    );
    
//passing vanilla JS to JSX takes curly brax to assign properties
    return (
        <div>
                 <Person name ={persons[0].name} colour = {persons[0].colour}/>
                 <Person name ={persons[1].name} colour = {persons[1].colour}/>
        </div>
    )
    // return <h1>This is state</h1>
}

const Person = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.colour}</h2>
        </div>
    )
}
export default State;