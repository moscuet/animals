import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

export default function AnimalSingle() {
    const [animal, setAnimal] = useState();
   const  {id} = useParams()
  
   useEffect(() => {
        
        if(!animal){
            axios.get(`http://localhost:3001/animals/${id}`)
            .then( response => setAnimal(response.data))
        }
    })
        let data = undefined
        if(!animal){
        data= <p> Loading data..</p>
        }
        else{  
            data =  <div>
                        <h1>{animal.name}</h1>
                        <p>{animal.desc}</p>
                        <img src={animal.img} alt ='animal pic'/>
                        <a href = {animal.link} target ="_blank" rel="noreferrer">Read more in wiki</a>
                   </div>
        }
   return <div>{data}</div>
}