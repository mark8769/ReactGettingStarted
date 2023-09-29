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
- Returning JSX NOTE: Have to enclose the return inside one container (DIV, or **Fragments(<> and </>)**)
```
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
```


Lifting state up: 

Moving state from a child component (useState()) to the parent component.
In the tutorial, they move the state from a square component in the tic-tae-toe
game to the board. This allows simpler code to determine who won.

Although this example is not the clearest, another example
would be if you had two counters on a page. Anytime you click on one button
you want to increate the counter by one unit. For some reason, the person who
gave you this project want's you to keep an identical counter on the right side of the page.

So one counter on the far left, and one counter on the far right.

Each time you click on the far left, its value increases by one.
But now your counter on the right is different from the other one.

Now the user has to click on the other button to get them back into sync....

That defeats the purpose of our site, the user has to perform more work and now 
has had a bad experience with the UX/UI.

To fix this issue, we can move the state value to a parent component, and pass down the props
down to both child components through a parameter. NOW our counters will stay in sync!

Another change you'll have to do is pass down a function to the child component, to be able
to change the state in the parent component... (The reasoning for this is that a component
can only update it's own state. So a child can't update it's parents state and vice versa).

