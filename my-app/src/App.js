import { useState } from 'react';

function Square( {propValue} ){
  // The {} "escapes into Javascript from JSX"
  return <button className="square">{propValue}</button>;
}
// This a component called "Square"
export default function Board(){
  return(
    <>
      <div className="board-row">
        <Square value="1"></Square>
        <Square value="2"></Square>
        <Square value="3"></Square>
      </div>
      <div className="board-row">
        <Square value="4"></Square>
        <Square value="5"></Square>
        <Square value="6"></Square>
      </div>
      <div className="board-row">
        <Square value="7"></Square>
        <Square value="8"></Square>
        <Square value="9"></Square>
      </div>
    </>
  )
}