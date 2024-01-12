import { useState } from 'react'
import Sidenav from './component/Sidenav'
import Main from './component/Main'
import Work from './component/Work'
import Projects from './component/Projects'
import Contact from './component/Contact'


function App() {
  

  return (
  
      <div>
        <Sidenav/>
        <Main/>
        <Work/>
        <Projects/>
        <Contact/>
      </div>
      
  )
}

export default App
