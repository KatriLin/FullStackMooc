import { useState } from 'react'

const Hello = ({ name, age }) => {
  
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>H Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>

    </div>
  )
}

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

  const App = () => {
    const [ counter, setCounter ] = useState(0)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
    console.log('rendering with counter value', counter)
    const nimi = 'Pekka'
    const ika = 10
    const increaseByOne = () => { 
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
    }
    const decreaseByOne = () => {
      console.log('decreasing, value before', counter)
    setCounter(counter - 1)
    }
    const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
    }


    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      const updatedLeft = left + 1
      setLeft(updatedLeft)
      setTotal(updatedLeft + right) 
    }
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      const updatedRight = right + 1
      setRight(updatedRight)
      setTotal(updatedRight + left) 
     
    }
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={nimi} age={ika} />
        
        <Display counter={counter}/>
        <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />    
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
        <p>total {total}</p>
      </div>    
      </div>
    )
  }

export default App