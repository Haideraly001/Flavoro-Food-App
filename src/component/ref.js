import React, { useRef } from 'react'

const Ref = () => {

  const inputRefvalue = useRef(null)

  function handleRefvalue() {
    inputRefvalue.current.style.color = "blue"
    console.log(inputRefvalue);

  }

  return (
    <div>
      <input type="text" ref={inputRefvalue} />
      <button onClick={handleRefvalue}>update value</button>
    </div>
  )
}

export default Ref
