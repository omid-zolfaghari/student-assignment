import { useEffect, useState } from "react"
import NotFound from "../Pages/NotFound";
import { Link } from "react-router-dom";

export default function BorderCountry({cca3}) {
  console.log(cca3);
    const [border, setBorder] = useState([])

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/${cca3}`).then(res => res.json()).then(data => {
            console.log(data);
            setBorder(data)}).catch(e=>{
                console.log(e);
                return <NotFound/>
            })
    },[cca3])

  return (
    <Link to={`/${cca3}`}>
      <button className="py-1 px-8 rounded-sm shadow-lg hover:bg-gray-200 dark:hover:bg-[#1f282f]">{border[0].name.common}</button>
    </Link>
  )
}
