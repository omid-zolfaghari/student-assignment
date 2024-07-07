
import BorderCountry from "./BorderCountry"

export default function DetailCards({data}) {
    if(!data){
      return <div className="container my-5 mx-auto"><h1 className="text-xl font-semibold">Loading...</h1></div>  
    }
    
    
    let nativeName
    let currency

for(const name in data.name.nativeName){
    nativeName = data.name.nativeName[name].common
}

for (const money in data.currencies) {
    currency = data.currencies[money].name
}

// let language =Object.values(data.languages)


        return (
            
          <div className="container flex h-max mb-12 justify-center mx-auto w-full mt-10 md:mt-24">
            <div className="container w-full h-max">
            <div className="w-full flex flex-col md:flex-row md:justify-evenly">
            <img className="md:h-60 rounded" src={data.flags.png} alt=""/>
            <div className="lg:w-48 px-3">
            <h1 className="mt-5 md:mt-0 font-bold tracking-wide text-xl md:text-2xl md:font-extrabold">{data.name.common}</h1>
            <div className="flex lg:w-48 flex-col mt-10 gap-3">
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Native Name : </span>{nativeName}</p>
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Population : </span>{data.population}</p>
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Region : </span>{data.region}</p>
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Sub Region : </span>{data.subregion}</p>
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Capital : </span>{data.capital}</p>
            </div>
            </div>
            <div className="flex px-3 flex-col mb-10 mt-10 gap-3">
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Top Level Domain : </span>{data.tld[0]}</p>
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Currencies : </span>{currency}</p>
            <p className="md:font-medium"><span className="font-semibold md:font-bold">Languages : </span>{Object.values(data.languages).join(" , ")}</p>
            </div>
            </div>
            {data.borders ? (
            <div className="px-3 lg:w-80 container mx-auto mt-4">
                 <p className="font-semibold md:font-bold">Border Countries : </p>
                 <div className="flex flex-wrap gap-3">
                    {data.borders.map((item, i)=>{
                        return <BorderCountry key={i} cca3={item}/>
                    })}
                 </div>
            </div>
            ) : null}
            </div>
            
          </div>
        )
}
