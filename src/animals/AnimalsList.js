import AnimalCard from '../animals/AnimalCard'
import './animalsList.css'
export default function AnimalsList({animals}) {
  
    return (
        <div className = 'posts'>
            {
                animals.map( animal=>(
                     <AnimalCard
                     key = {animals.id}
                     animal ={animal}
                     />
                )
            )}
        </div>
    )
}

