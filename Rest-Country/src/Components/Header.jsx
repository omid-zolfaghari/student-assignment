import { useState } from "react"


export default function Header() {

    const [dark, setDark] = useState(false)

 document.body.style.backgroundColor = dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"
 document.body.style.color = dark ? "white" : "black"

 const handleDarkMode = ()=>{
    setDark(!dark)
 }

  return (
    <div className="w-full shadow-lg flex items-center px-2 justify-between h-24">
      <p>Where in the world?</p>
      <p className="cursor-pointer" onClick={handleDarkMode}>{dark ? "Light mode" : "Dark mode"}</p>
    </div>
  )
}
