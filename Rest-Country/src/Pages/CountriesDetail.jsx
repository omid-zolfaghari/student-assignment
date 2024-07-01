import { useParams } from "react-router-dom"
import Button from "../Components/Button"
import DetailCards from "../Components/DetailCards"
import { useState, useEffect } from "react";


export default function CountriesDetail() {


  const [country, setCountry] = useState([])
  const {id} = useParams()
  
  
  useEffect(()=>{
      fetch(`https://restcountries.com/v3.1/alpha/${id}`).then(res => res.json()).then(data => {
          console.log(data);
          setCountry(data)})
      },[id])

  return (    
    <section className="w-full container mx-auto h-max flex flex-col">
      <Button/>
      <DetailCards data= {country[0]}/>
    </section>
  )
}
