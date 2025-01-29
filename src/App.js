import React from 'react'
import { userContext } from './context'
import Content from './context-content'


export default function App(){
  return (
    <userContext.Provider value={'Yasinthon Siwarat'}>
      <Content/>
    </userContext.Provider>
  )
}
