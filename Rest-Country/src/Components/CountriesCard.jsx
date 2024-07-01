import {Link} from "react-router-dom"



export default function CountriesCard({data}) {


    
    return (
      <Link to={`/${data.cca3}`}>
      <div className="bg-inherit w-80 shadow-xl rounded-lg">
        <div className="mx-auto max-w-2xl sm:py-6">
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
            
                <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={data.flags.png}
                    className="h-48 w-full object-cover group-hover:opacity-75"
                    
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
       </Link>
      
    )
  }