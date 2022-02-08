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
    // const [count0, setCount0] = useState(0);
    const [persons, setPersons] = useState(
        [
             {name: "Kei", colour: "Red"},
             {name: "Yuri", colour: "Black"}
        ]
    );

    const handleClick = (a) => {
        console.log(a);
    }
    const [bool, setBool] = useState(false);

    const logger = () => {
        setBool(!bool);
        console.log(bool);
    }


    const [ex, setEx] = useState(false);

    const [colourState, setColourState] = useState(
        [
             {num: 1, colour: "red"},
             {num: 2, colour: "red"},
             {num: 3, colour: "black"},
             {num: 4, colour: "black"}
        ]
    );
    const exerciseFunc = () => {
        setEx(!ex);
        console.log(ex);
    }

    // const coComponent(props) {
    // }
    // const [backg, setBackg] = useState(backg);

//passing vanilla JS to JSX takes curly brax to assign properties
    return (
        <div>
                 <Person name ={persons[0].name} colour = {persons[0].colour} clickMe = {handleClick}/>
                 <Person name ={persons[1].name} colour = {persons[1].colour} clickMe = {handleClick}/>
                 <button onClick = {logger}>clickme</button>
                 <button onClick = {logger}>clickme</button>
                 <button onClick = {exerciseFunc}>Change bg</button>

                 <ExerciseComp num = {colourState[0].num} colour={colourState[0].colour} text={colourState[0].colour}/>
                 <ExerciseComp num = {colourState[1].num} colour={colourState[1].colour} text={colourState[1].colour}/>
                 <ExerciseComp num = {colourState[2].num} colour={colourState[2].colour} text={colourState[2].colour}/>
                 <ExerciseComp num = {colourState[3].num} colour={colourState[3].colour} text={colourState[3].colour}/>
                 <p>The two blue components above use the conditional to assign a background colour different from the colour property of the component when the num property of the component is >= 3.</p>
        </div>
    )
    // return <h1>This is state</h1>
}

const Person = (props) => {
    return (
        <div>
            <h1 onClick = {() => props.clickMe(props.name)} style={{color: props.colour}}>{props.name}</h1>
            <h2 onClick = {() => props.clickMe(props.colour)}>{props.colour}</h2>
        </div>
    )
}

const ExerciseComp = (propz) => {
    if (propz.num >= 3) {
        return (
            // <div style={{backgroundColor: {propz.colour}}}>
            <div style={{backgroundColor: "blue"}}>
                {propz.text}
            </div>
        )
    }
    else
    {
        return (
            // <div style={{backgroundColor: {propz.colour}}}>
            <div style={{backgroundColor: propz.colour}}>
                {propz.text}
            </div>
        )
    }

}

export default State;