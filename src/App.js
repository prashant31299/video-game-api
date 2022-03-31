import { useState,useEffect } from 'react';
import './App.css';

function App() {
 const [gameTitle,setGameTitle]=useState(' ')
 const [serchGame,setserchgames] =useState([])
 const [deals,setdeals] = useState([])
// console.log(gameTitle);

  const searchGame= async()=>{
  const responce= await fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
  const data= await responce.json()
  setserchgames(data)
}
console.log(serchGame)

useEffect(()=>{
   const dealData = async ()=>{
     const responce = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3")
     const data  =await responce.json()
     setdeals(data)
     console.log(data);
     console.log("renderes");
   }
   dealData()
},[])
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
    {serchGame.map((game,key)=>{
      return(
        <div className='game' key={key}>
          {game.external}
          <img src={game.thumb}/>
          {game.cheapest}
        </div>

      )
    })}
  </div>
  </div>      
        <h1>Latest Deals </h1>
      <div className='dealSeaction'>
        {deals.map((game,key)=>{
          return(
            <div className='' id='deals' key={key}>
          {game.title} 
          {/* <img src={game.thumb}/>
          {game.cheapest} */}
        </div>
            
          )

        })}
      </div>
     </div>
  );
}

export default App;
