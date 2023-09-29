import { useState } from 'react';

function Square( {propValue} ){
  // const[var_to_use, setter_function] = useState(initial_value)
  // Any time a setter is used/called React will rerender the 
  // component(in this case the square) since the state has changed.
  // const[value, setValue] = useState(null);

  // function handleClick(){
  //   // console.log("Clicked");
  //   setValue("X");
  // }


  // The {} "escapes into Javascript from JSX"
  return (
    <button className="square" onClick={handleClick}>{propValue}</button>
  )
}
///////////////////////////////////////////////////////////////////////
// This a component called "Square"
export default function Board(){

  const [squares, setSquares] = useState(Array(9).fill(null));
  
  return(
    <>
      <div className="board-row">
        <Square value={squares[0]}></Square>
        <Square value={squares[1]}></Square>
        <Square value={squares[2]}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]}></Square>
        <Square value={squares[4]}></Square>
        <Square value={squares[5]}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]}></Square>
        <Square value={squares[7]}></Square>
        <Square value={squares[8]}></Square>
      </div>
    </>
  )
}