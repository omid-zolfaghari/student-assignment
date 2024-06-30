import {Link} from "react-router-dom"



export default function CountriesCard({data}) {


    
    return (
      // <Link to={`/${data.cca3}`}>
      <div className="bg-inherit shadow-xl rounded-lg border-none">
        <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={data.flags.png}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    
                  />
                </div>
                <h3 className="px-5 font-bold text-lg text-inherit-700">{data.name.common}</h3>
                <div className="flex px-3 mb-3 flex-col">
                <p className="mb-1 font-light px-2 text-lg text-inherit-900"><span className="font-semibold">Population :</span> {data.population}</p>
                <p className="mb-1 font-light px-2 text-lg text-inherit-900"><span className="font-semibold">Region : </span>{data.region}</p>
                <p className="mb-1 px-2 font-light text-lg text-inherit-900"><span className="font-semibold">Capital : </span>{data.capital}</p>

                </div>
            
          </div>
        </div>
      </div>
      // </Link>
      
    )
  }