# React Documentation Notes
https://react.dev/learn

1. (Tic Tae Toe - Getting started)[https://react.dev/learn/tutorial-tic-tac-toe]
2. (Thinking in React)[https://react.dev/learn/thinking-in-react]

Component: Piece of reusable code that represents a part of a user interface. Used to render, manage, and update the UI elements in your application.

```
export default function Square() {
  return <button className="square">X</button>;
}
```
- Export: JavaScript keyword makes this function accessible outside of this file.
- className="square": Button property or **_prop_**
- Returning JSX NOTE: Have to enclose the return inside one container (DIV, or <></>)
```
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
```



