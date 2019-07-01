import * as React from 'react'
import { Header } from './components'

export const App:React.StatelessComponent<{}> = 
() => {
  return (
    <div className="container-fulid">
      <Header />
    </div>
  )
}