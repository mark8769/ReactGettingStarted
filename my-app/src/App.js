import { useState } from 'react';

function Square( {propValue} ){
  // const[var_to_use, setter_function] = useState(initial_value)
  // Any time a setter is used/called React will rerender the 
  // component(in this case the square) since the state has changed.
  const[value, setValue] = useState(null);

  function handleClick(){
    // console.log("Clicked");
    setValue("X");
  }
  // The {} "escapes into Javascript from JSX"
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}
///////////////////////////////////////////////////////////////////////
// This a component called "Square"
export default function Board(){
  return(
    <>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="board-row">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  )
}