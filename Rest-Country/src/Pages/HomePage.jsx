import React, { useEffect, useState } from 'react'
import CountriesCard from '../Components/CountriesCard';

export default function HomePage() {
const [countries, setCountries] = useState([])
const [input, setInput] = useState("");
const [select, setSelect] = useState("");


useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => {
        setCountries(data)})
    },[])
    
const handleChangeInput = (e)=>{
    setInput(e.target.value);


}

const handleChangeSelect = (e)=>{
  setSelect(e.target.value)
  
}



const regions = ["Filter by region", "Asia", "Americas", "Africa", "Europe", "Oceania"];

  return (
    <>
    <div className='container my-12 mx-auto w-72 flex flex-col md:flex-row md:w-full md:justify-around'>
      <input value={input} onChange={handleChangeInput} className='h-10 bg-inherit p-5 shadow-lg md:w-72 md:my-6 border rounded-lg' type="text" placeholder='Search' />
    <select value={select} onChange={handleChangeSelect} className='my-10 md:my-6 bg-inherit w-48 h-10 px-4 shadow-lg border rounded-lg'>
          {regions.map((region, i)=>{
            return <option className='bg-inherit text-black' key={i} value={i === 0 ? "" : region}>{region}</option>
          })}
    </select>
    </div>
    <section className='flex mb-24 mx-auto container w-80 md:w-full flex-wrap justify-center gap-x-10'>
        
        
         {
         countries.map((country, i)=>{
            if(select){
                if(country.region === select && country.name.common.toLowerCase().includes(input.toLowerCase())){
                    return <CountriesCard key={i} data={country}/>
                }
            }else{
                if(country.name.common.toLowerCase().includes(input.toLowerCase())){

                    return <CountriesCard data={country} key={i}/>
                }
            }
         })
         }
        
        
        
    
    </section>

    </>
  )
}
