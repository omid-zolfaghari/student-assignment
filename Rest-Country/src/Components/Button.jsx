import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"


export default function Button() {
const navigate = useNavigate()

const handleBackClick = ()=>{
 navigate(-1)
}

  return (
    <>
    <button onClick={handleBackClick} className="w-28 h-10 mt-5 mx-3 bg-inherit py-2 rounded border-2 border-slate-300 shadow-xl"><FontAwesomeIcon className="" icon={faArrowLeft}/> Back</button>
    
    </>
  )
}
