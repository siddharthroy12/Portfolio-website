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

- [`useState`](#usestate)
- [`useEffect`](#useeffect)
- [`useContext`](#usecontext)
- [`useReducer`](#usereducer)
- [`useCallback`](#usecallback)
- [`useMemo`](#usememo)
- [`useRef`](#useref)


## `useState`

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

## `useEffect`

The useEffect hook has many use cases, it is a combination of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`from Class Components.

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

The `useEffect` hook is a function that takes a function as it's first argument and that function will run when the component mounts and update

![](https://i.imgur.com/3btMOl3.gif)

As you saw the function ran the first time when the component got mounted and whenever it updated.

This function in the first argument of `useEffect` hook will only run when the component gets mounted and updated.

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

You can also put state inside the dependencies list and it will only run when the component gets mounted and when the state changes.

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

You can put multiple states in the dependency list but do note that if you are accessing any state from inside the function in `useEffect` hook then you have to put that state in the dependencies list.

```jsx
useEffect(() => {
  // Do stuffs
}, [state1, state2, state3])

// Don't do this
useEffect(() => {
  // Doing something with state1
}, []) // <= Not providing state1 in dependencies list
```

Now the last thing left is the cleanup function, this function is return by the function from the first argument and will run when the component gets unmounted.

```jsx
useEffect(() => {
  // Initiate a request to API and update a state
  API.requestUserData()
  
  return () => { // Cleanup function
    // Cancel the request when the component gets unmounted
    API.cancelUserDataRequest()
  }
}, [])
```

Sometimes when we run an async function when the comp gets mounted if the function tries to update a state after the comp gets unmounted it can cause memory leaks so it's better to stop that from happening using the cleanup function.


## `useContext`

Normally if you want to share a state between components you would have to move the state to the uppermost component and then pass it down using props of every component. This method might be ok for small scale project but for a big scale project this can be tedious so to help with that `useContext` allow you to have global state accessble from any component without passing down the state.

> There are two functions to note when using Context API

```jsx
// Create a context with a default value
const context = createContext(defaultValue) // defaultValue is optional

const value = useContext(conext) // Get the value from context
```

Here is an example using Context API

In `App.js`:

```jsx
import { useState, createContext } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Adder from './Adder'

const Context = createContext()

function App() {
  const [number, setNumber] = useState(0)

  return (<Context.Provider value={{number, setNumber}}>
    <p>Number: { number }</p>
    {/* Any component inside this component can access the value of the context */}
    {/* We can also provide the value of the context here */}
    
      <Component1> {/* Dummy component */}
        <Component2> {/* Dummy component */}
          <Adder />
        </Component2>
      </Component1>
    
  </Context.Provider>)
}

export { Context };
export default App;
```

In `Adder.js`:

```jsx
import { useContext } from 'react'
import { Context } from './App'

export default function Adder() {
	const contextValue = useContext(Context)

	return (<div style={{border: '1px solid black'}}>
		<p>Inside Adder Component</p>
		<p>Number: { contextValue.number }</p>
		<button onClick={() => contextValue.setNumber(prevNum => prevNum + 1)}>Add Number</button>
	</div>)
}
```

The result:
![](https://i.imgur.com/ftehJrU.gif)

### Explanation

- In `App.js` we are creating a context and using the `Provider` Component inside the `Context` object returned by `createContext` as the uppermost component. Any component inside `Context.Provider` Component can access the value of the `Context`
- We are also passing the `number` and `setNumber` from `App.js` as the value of the `Context` using the value prop of the `Context.Provider` component
- We need to export this `Context` object to be used inside the other components when using `useContext`
- In `Adder.js` we are simply importing the `Context` object and using it with `useContext` hook to get the value of the context
- The object returned by `useContext` contains the value we provided in the value prop of the provider component
  
Note that whenever the value of context change the entire component tree gets re-rendered and can effect performance. If you don't want that behaviour it's better to use external solution for global state management like `react-redux` that only re-render the desired component.

You can also have multiple context and context provider if you want.

## `useReducer`

This is an alternative to `useState` it take an additional function called reducer, it's similar to how redux handle state.

`useReducer` is useful when you have complex state, like an object with multiple sub values.

Here is an simple counter example from [React Docs](https://reactjs.org/docs/hooks-reference.html#usereducer) using  `useReducer`:

```jsx
import { useReducer } from 'react'

const initialState = {count: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}

export default App
```

![](https://i.imgur.com/qXrCLXn.gif)

Here is an another example using complex state:

```jsx
import { useReducer } from 'react'

const initialState = {
  username: 'Siddharth_Roy12',
  age: 17,
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment_age':
      return {...state, age: state.age + 1}
    case 'decrement_age':
      return {...state, age: state.age - 1}
    case 'change_username':
      return {...state, username: action.payload}
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <p>Username: { state.username }</p>
      <p>Age: { state.age }</p>
      
      <button onClick={() => dispatch({type: 'decrement_age'})}>-</button>
      <button onClick={() => dispatch({type: 'increment_age'})}>+</button>
      <input
        type="text"
        value={state.username}
        onChange={(e) => dispatch({
          type: 'change_username',
          payload: e.target.value
        })}
      />
    </>
  )
}

export default App;
```
![](https://i.imgur.com/ZRO48vJ.gif)

### Lazy initialization

You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to `init(initialArg)`.

It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action:

```jsx
import { useReducer } from 'react'

const initialCount = 0

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}

export default App
```

## `useCallback`

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

Usually if you have an inline function in a react component, whenever that component re-render that function will also gets re-created

The `useCallback` hook takes an inline function and an dependencies list and return an memorized version of that function. That function will only recreate when it's dependencies change.


You can visualize the function re-creation using a `Set`

> **NOTE:** `Set` can only have unique elements. `Object.is` is used to check and remove duplicate elements.

Without `useCallback`:

```jsx
import { useState } from 'react'

const functionsCounter = new Set()

function App() {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const incrementOtherCounter = () => {
    setOtherCounter(otherCounter + 1)
  }

  functionsCounter.add(increment)
  functionsCounter.add(decrement)
  functionsCounter.add(incrementOtherCounter)

  console.log(functionsCounter.size)

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  )
}

export default App;
```

![](https://i.imgur.com/T5UTWvT.gif)

With `useCallback`:


```jsx
import { useState, useCallback } from 'react'

const functionsCounter = new Set()

function App() {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  }, [otherCounter])

  
  functionsCounter.add(increment)
  functionsCounter.add(decrement)
  functionsCounter.add(incrementOtherCounter)

  console.log(functionsCounter.size)

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  )
}

export default App;
```

![](https://i.imgur.com/hmZEO4g.gif)

The use case of the hook is very small, you will most likely never have to use this hook.