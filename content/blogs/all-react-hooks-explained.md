---
title: All React Hooks Explained
description: Learn how to use every built in react hooks and make your own too.
date: August 30, 2021
featured: true
---
Since React 16.8 the most common way to build a react component is using function because now we can have all the features of class components in functional components using hooks.

But why use a functional component instead of a class-based component?

Using a functional component with hooks reduces the line of codes and makes it look more clean and readable.

In this blog, you are going to learn how to use the most used built-in react hooks and how to make a custom hook from scratch.

* `useState`
* `useEffect`
* `useContext`
* `useReducer`
* `useCallback`
* `useMemo`
* `useRef`

## useState

If you are used to class-based components you know that functional components don't state.

`useState`allows you to have state in functional components.

```jsx
// const [value, setValue] = useState(initialValue)
const [name, setName] = useState('Siddharth')

console.log(name) // => Siddharth

setName('React') // sets the name to "React" and re-render the component

// Value of name after re-render

console.log(name) // => React
```

The `useState` hook is a function like every other hook. It takes an initial `value` and returns an array containing the `value` and a function to change the `value`.

On first render the `value` is set to `initialValue.`

The setValue function is for updating the value. It takes the new value as the first argument and triggers a re-render on the component.

Here is an example to understand it better:

```jsx
import { useState } from 'react'

function App() {
  console.log('Component render')
  const [number, setNumber] = useState(32)

  function updateNumber() {
    setNumber(Math.random())
  }

  return (<>
    <p>{ number }</p>
    <br />
    <button onClick={updateNumber}>Update number</button>
  </>)
}

export default App;
```

![App Demo gif](https://i.imgur.com/TNHiwNK.gif)