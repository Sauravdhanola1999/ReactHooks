import React, { useCallback, useState } from 'react'
import { UsState } from './Components/UsState'
import { UsEffect } from './Components/UsEffect'
import { UsContext } from './Components/UsContext'
import { UsReducer } from './Components/UsReducer'
import { UsRef } from './Components/UsRef'
import { UsMemo } from './Components/UsMemo'
import UsCallback from './Components/UsCallback'


const App = () => {

  const [add, setAdd]= useState(0);

  const learning = useCallback(() =>{
    //do something use for useCallback
  }, [])

  return (
    <div>
      <h1>Hello</h1>
      {/* <UsState /> */}
      {/* <UsEffect /> */}
      {/* <UsContext /> */}
      {/* <UsReducer /> */}
      {/* <UsRef /> */}
      {/* <UsMemo /> */}
      <UsCallback Learning={learning} />
      <h1>Add Something: {add}</h1>
      <button onClick={()=>setAdd(c=>c+1)}>Add</button>
    </div>
  )
}

export default App
