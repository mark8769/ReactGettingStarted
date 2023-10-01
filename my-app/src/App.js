import { useState } from 'react';

function Square( {propValue, onSquareClick} ){
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
export default function Game(){

  const [xIsNext, setXIsNext] = useState(true);
  // Keep 9 empty boards to set state on later.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Keep track of what move Player is currently viewing
  const [currentMove, setCurrentMove] = useState(0);
  // Set board to current move. (Top of Stack)
  const currentSquares = history[currentMove];

  // Needs to update Game's state to trigger a re-render
  function handlePlay(nextSquares){
    // Creates a new array that contains the items in history.
    // Spread Syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // The spread (...) syntax allows an iterable, such as an 
    // array or string, to be expanded in places where 
    // zero or more arguments (for function calls) or elements (for array literals) are expected. 

    // If we go back in time(past move) then do not keep any future moves beyond the current move.
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory([...history, nextSquares]);
    // Every time a move is made, update currentMove to point to latest history entry.
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0){
      description = "Go to move #" + move;
    }else{
      description = "Go to game start";
    }
    return(
      // Key: Reserved keyword in REACT, notice how were in JSX(which is enabled by importing react)
      // So by passing this, react will have additional context of the component. (Ask ChatGPT more)
      <li key={move}>
        <button onClick={ () => jumpTo(move)}>
          {description}
        </button>
      </li>
    )
  });

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

///////////////////////////////////////////////////////////////////////
// This a component called "Square"
function Board({ xIsNext, squares, onPlay }){

  // This will cause infinite loop when passed down as prop. handleClick(i)(calling the function)
  function handleClick(i){
    // Guard Clause, return early if square already set.
    // Also Check to see if game is over and wheter we should check for winner.)
    if (squares[i] || calculateWinner(squares)){
      return;
    }
    // Grab a COPY of the array. (Keeping track of history.)
    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    // Calling the setSquare function will let React
    // Know that the state of the component has changed.
    // This will cause a re-render of the components that
    // use the squares state (Board) as well as its child components.
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);

    // Use passed in function to control state of board from Game component.
    onPlay(nextSquares);
  }

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++){
      // Similar to Tuple unpacking...
      const [a, b, c] = lines[i]
      // Check to see if whole "line" is "X" or "O".
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  // Always called when re-rendering game...
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return(
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* Use an arrow function. When the square is clicked, the code after the => will run. (Our function)*/}
        <Square propValue={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square propValue={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square propValue={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square propValue={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square propValue={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square propValue={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square propValue={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square propValue={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square propValue={squares[8]} onSquareClick={() => handleClick(8)}></Square>
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