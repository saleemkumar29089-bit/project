import React, { useState } from 'react'

function Api() {

  // eslint-disable-next-line no-unused-vars
  const [apiData, setApiData] = useState([])

  //  fetch("https://jsonplaceholder.typicode.com/posts")
  //  .then((res)=> res.json())
  //  .then((data) => setApiData(data))
  //  .catch((error) => console.log(error));

  return (
    <>
       <h1>Api Calling</h1>
       {/* This is not right way */}
       <ul>
        data:
        {
          apiData.map ((curData) => {
              return <li key ={curData.id}>{curData.title}</li>
          }
        )
        
        }
       </ul>
    </>
  )
}

export default Api
