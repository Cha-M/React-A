import React, {useState} from "react";


const StateEdit = () => {

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

//passing vanilla JS to JSX takes curly brax to assign properties
    return (
        <div>
                 <ExerciseComp num = {colourState[0].num} colour={colourState[0].colour} text={colourState[0].colour}/>
                 <ExerciseComp num = {colourState[1].num} colour={colourState[1].colour} text={colourState[1].colour}/>
                 <ExerciseComp num = {colourState[2].num} colour={colourState[2].colour} text={colourState[2].colour}/>
                 <ExerciseComp num = {colourState[3].num} colour={colourState[3].colour} text={colourState[3].colour}/>
                 <p>The two blue components above use the conditional to assign a background colour different from the colour property of the component when the num property of the component is {">"}= 3.</p>
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

export default StateEdit;