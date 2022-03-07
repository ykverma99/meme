import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App(){
  return(
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Header />
      <Main />
    </div>
  )
}

export default App