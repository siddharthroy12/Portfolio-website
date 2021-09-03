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

> **NOTE:** It's doesn't have to be named as value and setValue, you can name it anything you want but value and setValue style is preferred among all developers.

If the new value is based on the previous value then you can do this:

```jsx
const [number, setNumber] = useState(0)

 function updateNumber() {
   // Do this
   setNumber(prevNumber => prevNumber + 1)
   // not this
   setNumber(number + 1)
 }
```

If you are storing an object inside a state then always use the object spread syntax to make a copy otherwise the component won't re-render.

```jsx
const initialUserState = {
  name: 'Siddharth Roy',
  age: 17
}

const [user, setUser] = useState(initialUserState)

// Do this
setUser(prevState => {
  let newState = prevState
  newState.age = prevState.age + 1
  return {...prevState, ...newState} // Make a new copy using spread syntax
})
// After re-render user.age is 18


// Not this
setUser(prevState => {
  let newState = prevState
  newState.age = prevState.age + 1
  return newState
})
// Component won't re-render
```

The reason behind this is React uses `Object.is` for comparing new value to previous value and if they are the same It won't re-render, and `Object.is` does not check what's inside the object.

```jsx
let obj1 = { name: 's' }
let obj2 = { name: 's' }

Object.is(obj1, obj2) // => false

obj2 = obj1

Object.is(obj1, obj2) // => true

// Using spread operator to copy the object
obj2 = { ...obj1 }

Object.is(obj1, obj2) // => false
```

> **NOTE:** Spread operator won't copy nested objects, you will have to copy them manually.

## useEffect

The useEffect hook has many use cases, it is a combination of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount `from Class Components.

Here is a simple demo of useEffect hook:

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('This runs') // This will run when it mounts and update
  })

  return (<>
    <p>{ number }</p>
    <br />
    <button onClick={() => setNumber(prevNum => prevNum + 1)}>Increase Number</button>
  </>)
}

export default App;

```

The useEffect hook is a function that takes a function as it's first argument and that function will run when the component mounts and update

![](https://i.imgur.com/3btMOl3.gif)

As you saw the function ran the first time when the component got mounted and whenever it updated.

This function in the first argument of useEffect hook will only run when the component gets mounted and updated.

It also takes an array as a second optional argument and it behaves differently based on the array.

Like for this example, the function will run only run when the component mounts.

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('Component Mounted') // Only runs when the component gets mounted
  }, []) // <-- Give an empty array in second argument

  return (<>
    <p>{ number }</p>
    <br />
    <button onClick={() => setNumber(prevNum => prevNum + 1)}>Increase Number</button>
  </>)
}

export default App;

```

![](https://i.imgur.com/9AuZ4FS.gif)

The array we passed on in the second argument is called dependency list, when we omit the list the function run when the component mounts and when the component update (eg. When a state change), when we put an empty array in the second argument it only runs when the component gets mounted.

![](https://i.imgur.com/9AuZ4FS.gif)

You can also put state inside the dependencies list and it will only run when the component gets mounted and when the state changed.

```jsx
import { useState, useEffect } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [message, setMessage] = useState('Hi')

  useEffect(() => {
    console.log('Component Mounted') // Only runs when the component gets mounted
  }, []) // <-- Give an empty array in second argument

  useEffect(() => {
    console.log('Component mounted or message changed')
  }, [message])

  useEffect(() => {
    console.log('Component mounted or number changed')
  }, [number])

  return (<>
    <p> { message} </p>
    <p>{ number }</p>
    <br />
    <button onClick={() => setMessage(prevMsg => prevMsg + 'i')}>Increase Hi</button>
    <button onClick={() => setNumber(prevNum => prevNum + 1)}>Increase Number</button>
  </>)
}

export default App;

```

![](https://i.imgur.com/y2RbyxI.gif)

You can put multiple states in the dependency list but do note that if you are accessing any state from inside the function in useEffect hook then you have to put that state in the dependencies list.

```jsx
useEffect(() => {
  // Do stuffs
}, [state1, state2, state3])

// Don't do this
useEffect(() => {
  // Doing something with state1
}, []) // <= Not providing state1 in dependencies list
```

Now the last thing left is cleanup function