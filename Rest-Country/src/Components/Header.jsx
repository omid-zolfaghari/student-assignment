import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"


export default function Header() {

    const [dark, setDark] = useState(false)

 document.body.style.backgroundColor = dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"
 document.body.style.color = dark ? "white" : "black"

 const handleDarkMode = ()=>{
    setDark(!dark)
 }

  return (
    <div className="w-full shadow-lg flex items-center px-2 justify-between md:justify-around h-24">
      <h1 className="font-bold lg:text-2xl">Where in the world?</h1>
      <p className="cursor-pointer lg:text-xl" onClick={handleDarkMode}><FontAwesomeIcon icon={faMoon}/>{dark ? " Light mode" : " Dark mode"}</p>
    </div>
  )
}
