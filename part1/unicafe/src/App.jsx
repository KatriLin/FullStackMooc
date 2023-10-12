import { useState } from 'react'

const FeedbackButton = ({feedback, text}) => {
  return (
  <button onClick={feedback}>{text}</button>
  )
}
const Statistics = ({good, neutral, bad, all, average, positive}) => {
  return (
    <div>
      <h2>Statistics</h2>
      { good > 0|| neutral > 0|| bad > 0 ?(
      <div>
     <table>
      <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={`${positive}%`} />
      </tbody>
        </table>
        </div>
        )
      
      : (<div>
        <p>No feedback given</p>
         </div>
         )}
    

    </div>
  )
} 

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAllFeedback] = useState(0)
  const average = (good * 1 + neutral * 0 + bad * -1) / all || 0;
  const positive = (good / all) * 100 || 0; 
  

  const buttonGood = () => {
      setGood(good +1)
      const updateGood = good + 1
      setAllFeedback(updateGood + neutral+bad)
     
     
  }

  const buttonNeutral = () => {
    setNeutral(neutral +1)
    const updateNeutral = neutral + 1
    setAllFeedback(updateNeutral + good + bad)
    
  
}
const buttonBad = () => {
  setBad(bad +1)
  const UpdateBad = bad + 1
  setAllFeedback(UpdateBad + good + neutral)
 
}



  return (
    <div>
      <h1>Give feedback</h1>
      <FeedbackButton feedback={buttonGood} text="good" />
      <FeedbackButton feedback={buttonNeutral} text="neutral" />
      <FeedbackButton feedback={buttonBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      
    
    </div>
  )
}

export default App
