import { useState } from 'react';
import './App.css';

function App() {
 const [gameTitle,setGameTitle]=useState(' ')
 const [serchedgames,setserchgames] =useState('')
console.log(serchedgames);

  const searchGame= async()=>{
  const responce= await fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
  const data= await responce.json()
  setserchgames(data)
  // console.log(data)
  }

  return (
    <div className="App">


      
<div className='searchSection'>
  <h1>search for A game </h1>
  <input 
  type='text' 
  placeholder='MineCraft ..... '
  onChange={(event)=>{
    setGameTitle(event.target.value)
  }}
  />
  <button onClick={searchGame}>search game </button>
  <div className='games'>
  {serchedgames.map((game,key)=>{
    return(
      <div className='game'>{game.external}</div>
    )
  })}
  </div>
  
  
  
  </div>      
      <div className='dealSeaction'>
        <h1>Latest Deals </h1>
      </div>
     </div>
  );
}

export default App;
