import React,{useEffect, useState} from 'react'


  function Hapi() {

  const[apiData, setApiData] = useState({})
  const[loading, setLoading] = useState(true)
  //handling error
  const[error, setError] = useState()
 

  useEffect(()=>{

     const fetchData = async () =>{
      try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        // change the name of pokemon to get different pokemon data
        const data = await response.json()
        setApiData(data)
        console.log(data)
        setLoading(false)
      }catch(error){
        console.error(error)
        setLoading(false)
        setError(error)
      }
     }

     fetchData();
  },[]);



  if(loading)
    return(

      <div>
        <h1>Loading....</h1>
      </div>
  )

  if(error)
    return(

      <div>
        <h1>Error: {error.message}</h1>
      </div>
    )

   
  const myStyle ={
    width: "150px",
    height: "200px"
  }
  
    
    

  return (
    <>
           
       {/* This is right way */}
       <h1>Pokemon Data</h1>

       <h3>Let's Catch Pokemon</h3>
       <h4>{apiData.name}</h4>

     <ul>

      <li></li>
      <figure>
        <img src={apiData.sprites?.other.dream_world.front_default} style={myStyle} alt={apiData.name} />
      </figure>

      </ul>  
         

      

    </>

  )
}

export default Hapi
