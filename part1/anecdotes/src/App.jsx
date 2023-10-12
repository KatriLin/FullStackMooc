import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState("")
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const handleAnecdotes = () =>{
    const randomAnecdotes = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotes[randomAnecdotes])
  

 
  }
  const handleVote = () => {

    const votes = [...vote]
    votes[anecdotes.indexOf(selected)] += 1
    setVote(votes)
   
    
  }
  const mostvotes = () => {
    let mostVote = 0
    let mostVotedAnecdote ="";

    for (let i = 0; i < anecdotes.length; i++) {
      if (vote[i] > mostVote) {
        mostVote = vote[i];
        mostVotedAnecdote = anecdotes[i];
      }
    }
    return mostVotedAnecdote;
  }

  const mostvoted = mostvotes();

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{selected}</p>
      has {vote[anecdotes.indexOf(selected)]} votes
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdotes}>Next anecdotes</button>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{mostvoted}</p>
      <p>has {vote[anecdotes.indexOf(mostvoted)]} votes</p>
      </div>
      
    </div>
  )
}

export default App