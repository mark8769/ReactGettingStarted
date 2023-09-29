import { useState } from 'react';

function Square( {propValue, squareClick} ){
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
    <button className="square" onClick={onSquareClick}>{propValue}</button>
  )
}
///////////////////////////////////////////////////////////////////////
// This a component called "Square"
export default function Board(){

  const [squares, setSquares] = useState(Array(9).fill(null));

  // This will cause infinite loop when passed down as prop. handleClick(i)(calling the function)
  function handleClick(i){
    // Grab a COPY of the array.
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    // Calling the setSquare function will let React
    // Know that the state of the component has changed.
    // This will cause a re-render of the components that
    // use the squares state (Board) as well as its child components.
    setSquares(nextSquares);
  }

  return(
    <>
      <div className="board-row">
        {/* Use an arrow function. When the square is clicked, the code after the => will run.*/}
        <Square value={squares[0]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(2)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(3)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(5)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(6)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(8)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(9)}></Square>
      </div>
    </>
  )
}
/*  Now that your state handling is in the Board component, the parent Board 
component passes props to the child Square components so that they can 
be displayed correctly. When clicking on a Square, the child Square component 
now asks the parent Board component to update the state of the board. 
When the Board’s state changes, both the Board component and every child 
Square re-renders automatically. 
Keeping the state of all squares in the Board component will allow it to determine the winner in the future.*/