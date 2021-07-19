import React,{useState, useEffect, props} from 'react'
import axios from 'axios'

export default function ListaCarros(){
    const [countries, setcountries] = useState([])

    useEffect(() => {
            axios.get('https://api.worldbank.org/v2/country/?page=1&per_page=50&format=json')
            .then(res=>{
                const dadoscountries = res.data
                setcountries(dadoscountries[1])                
            })    
        }
    )

    // console.log(countries)
    return(
        <div>            
            <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nome</th>
                            <th>Região</th>
                            <th>Nível de Renda</th>
                            <th>Capital</th>
                            <th>Longitude</th>
                            <th>Latitude</th>
                        </tr>
                    </thead>                        
                    <tbody>
                    {countries.map(
                        country => 
                        <tr>
                            {/* <div key={country.id} >{country.name} - {country.region.value}</div>     */}

                            <td>{country.id}</td>
                            <td>{country.name}</td>
                            <td>{country.region.value}</td>
                            <td>{country.incomeLevel.value}</td>
                            <td>{country.capitalCity}</td>
                            <td>{country.longitude}</td>
                            <td>{country.latitude}</td>
                        </tr>            
                    )}
                       
                    </tbody>
                </table>
        </div>
    )
}

// Api Reference: https://www.programmableweb.com/api/world-bank-country-rest-api-v2