import React, { useState } from 'react'

const Objstate = () => {

  const [data, setData] = useState({ name: "Haider", age: 24 })

  function handleinputValue(e) {
    setData({ ...data, name: e.target.value, })
  }
  function handleinputValuetwo(e) {
    setData({ ...data, age: e.target.value })
  }




  return (
    <div>
      <input type="text" onChange={handleinputValue} value={data.name} />
      <input type="text" onChange={handleinputValuetwo} value={data.age} />
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
    </div>
  )
}

export default Objstate
