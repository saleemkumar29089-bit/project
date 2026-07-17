import React from 'react'

const list = () => {
  let Arr = [
    {
    id: 1,
    name: "Aryan",
    age: 22,
    course: "MERN",
  },
  {
    id: 2,
    name: "Rahul",
    age: 23,
    course: "MEAN",
  },
  {
    id: 3,
    name: "Priya",
    age: 21,
    course: "React",
  },
  {
    id: 4,
    name: "Anjali",
    age: 24,
    course: "Node.js",
  },
];
Arr.map((item) => {
  console.log(item.name, item.age);
})
  return (
    <div>
      {}
    </div>
  )
}

export default list
