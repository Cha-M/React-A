import {useState} from "react"

const Common = () => {
    const [numbers, setNumbers] = useState([1,2,3,4]);

    const addHandler = () => {
        let storedNums = [...numbers];
        storedNums.push(numbers[numbers.length - 1] + 1);
        setNumbers(storedNums);
    }
    return (
        <div>
            <h1>Common component</h1>
            {numbers.map((n, i) => {
                return <h1 key={i}>{n}</h1>
            })}
            <button onClick={addHandler}>add number</button>
        </div>
    )
}



// class App extends React.Component {
//     state = {
//         numbers: [1, 2, 3, 4, 5]
//     };

//     addHandler = () => {
//         let storedNums = [...this.state.numbers];
//         storedNums.push(storedNums[storedNums.length - 1] + 1);
//         this.state({numbers: storedNums});
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.numbers.map((number, index) => {
//                     return <p key = {index}>{number}></p>
//                 }}
//             </div>
//         )
//     }
// }

export default Common;