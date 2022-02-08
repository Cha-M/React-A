// import logo from './logo.svg';
import './App.css';
import a from "./a.jpg";
import b from "./b.jpg";
import c from "./c.jpg";
import d from "./d.jpg";
import e from "./e.jpg";

const App = () => {
  return (
    <div className="App">
      <FilmRow />
    </div>
  );
}

const FilmRect = (arg) => {
  return <div className="rect"><img src = {arg.imgLink}></img></div>
}
const FilmRow = () => {
  return (
    <div className="flexRow">

        <FilmRect imgLink = {a}/>


        <FilmRect imgLink = {b}/>


        <FilmRect imgLink = {c}/>


        <FilmRect imgLink = {d}/>


        <FilmRect imgLink = {e}/>

    </div>
  )
}



// const App = () => {
//   return (<div className="main">
//             <h1>Aitch One</h1>
//             <h2>Aitch Two</h2>
//             <Movies favMovie = "Brazil" Theme ="Dystopia"/>
//             <Movies favMovie = "Fitzcarraldo" Theme = "Chaos"></Movies>
//             <App2 />
//           </div>)
// }
// //self-closing <Movies />

// const Thema = (a) => {
//   return <p>Theme is {a.Val}</p>;
// }


// const Movies = (a) => {
//   return (
//     <div>
//       <h3>a movie I like is {a.favMovie}</h3>
//       <Thema Val = {a.Theme}/>
//     </div>
//   )
// }

// class App2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>I'm a class component</h1>
//         <Person name="Dan" age="32" />
//         <Person name="Dave" age="33" />
//         <Person name="Don" age="34" />
//       </div>
//     );
//   };
// };


// const Person = (props) => {
//   return (
//     <p>Hi I'm {props.name} and I'm {props.age}</p>
//   );
// };


export default App;
