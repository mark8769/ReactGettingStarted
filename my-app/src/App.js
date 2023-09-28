import { useState } from 'react';

function Square(){
  return <button className="square">1</button>;
}
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