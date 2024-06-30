import React, { useEffect, useState } from 'react'
import CountriesCard from '../Components/CountriesCard';

export default function HomePage() {
const [countries, setCountries] = useState([])
const [input, setInput] = useState("");
const [filterInput, setFilterInput] = useState([])
const [select, setSelect] = useState("");
const [filterSelect, setFilterSelect] = useState([])

useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all").then(res => res.json()).then(data => {
        setFilterSelect(data)
        setCountries(data)})
    },[input])
    
const handleChangeInput = (e)=>{
    setInput(e.target.value);

    const filteredData = countries.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))


    setFilterInput(filteredData)
}

const handleChangeSelect = (e)=>{
  setSelect(e.target.value)

  const filterCountries = countries.filter(country => country.region == e.target.value);

      if(e.target.value !== "Filter by region"){
          setFilterSelect(filterCountries)
      }
//   
}



const regions = ["Filter by region", "Asia", "Americas", "Africa", "Europe", "Oceania"];

  return (
    <>
    <div className='container my-12 mx-auto w-72 flex flex-col'>
      <input value={input} onChange={handleChangeInput} className='h-10 bg-inherit p-5 shadow-lg rounded-lg' type="text" placeholder='Search' />
    <select value={select} onChange={handleChangeSelect} className='my-10 bg-inherit w-48 h-10 px-4 shadow-lg rounded-lg'>
          {regions.map((region, i)=>{
            return <option key={i} value={region}>{region}</option>
          })}
    </select>
    </div>
    <section className='flex mb-24 container flex-wrap justify-center gap-3'>
        
        
         {/* {countries.map((country, i)=>{
            if(select == "Filter by region"){
                if(country.name.common.toLowerCase().includes(input.toLowerCase())){
                    return <CountriesCard key={i} data={country}/>
                }
            }else{
                if(country.region === select && country.name.common.toLowerCase().includes(input.toLowerCase())){
                    return <CountriesCard key={i} data={country}/>
                }
            }
            
         })}  */
        filterInput.length > 0 ? filterInput.map((country, i)=>{
            console.log(country);
            return <CountriesCard key={i} data={country}/>
        }) : filterSelect.map((country, i)=>{
            return <CountriesCard key={i} data={country}/>
        }) 
         
         }
        
        
        
    
    </section>

    </>
  )
}
