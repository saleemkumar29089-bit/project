// 13 july task

import React from 'react'

const App = () => {
      let num = [10,20,30,40,50];
      const handleincr = () => {
    num.push(60);
    console.log(num)    
  };
  handleincr()
  return (
    <div>
      <p>{JSON.stringify(num)}</p>
    <button onClick={handleincr}>click</button>
    </div>
  )

};




const State = () => {
  let num = 10
  num = num + 1
const handleincr = () => {
    num = num + 1
    console.log(num)
  }
  return (
    <div>
      <p>{num}</p>
      <button onClick={handleincr}>Increment</button>
    </div>
  )
}

 export default State








