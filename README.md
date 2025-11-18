#### 1. What is JSX, and why is it used?
Answer: JSX is JavaScript XML. JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.
It is used in React to easily create and visualize UI components.JSX makes code more readable, maintainable, and allows mixing JavaScript with UI.

#### 2. What is the difference between State and Props?
Answer: The difference between State and Props -
State: Local, mutable data that a component controls and can change over time.
Props: Read-only data passed from parent to child, which the child cannot modify.

#### 3. What is the useState hook, and how does it work?
Answer: The useState hook is a built-in React hook that lets functional components store and manage state data that can change over time.

It works by declaring a state variable and a setter function

Import useState-
import React, { useState } from 'react';

Declare a state variable-
const [count, setCount] = useState(0);

count - current state value
setCount - function to update the state
0 - initial value


Update the state-
setFunction(newValue);

When the state is updated, React automatically re-renders the component so the UI reflects the latest state.



#### 4. How can you share state between components in React?
Answer: Lift State Up is the process of keeping shared state in the closest parent component and sending it to the child component via props. This allows sibling or child components to access and update the same state.

Lift State Up is a common method to share state between sibling components or parent and child components.
Sharing State with Lift State Up :-

1. Find common parent: Choose the parent component shared by all children needing the state.
2. Move state to parent: Declare the state with useState in that parent.
3. ass as props: Send the state and its updater function (setState) to child components.
4. Use in children: Children can read the state or call the updater. Updating the parent state re-renders all children using it.


#### 5. How is event handling done in React?
Answer: In React, event handling is done by assigning a function to the event attribute (such as onClick) of a JSX element, which is executed on user action, updates the state, and causes the component to auto-rerender.

Event Handling in React – 

In React, you handle events by giving functions to JSX elements using attributes like onClick or onChange.The function runs when the user interacts (clicks a button, types in input). You can update state inside the function. When state changes, the component automatically re-renders and updates the UI. Normal events like button clicks or input changes work directly without any extra setup.