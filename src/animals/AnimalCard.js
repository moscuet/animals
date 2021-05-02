import React from 'react'
import './animalCard.css'
import {Link} from 'react-router-dom'
export default function AnimalCard({animal}) {
    const {name,img,desc,aclass} = animal
    const truncate = (str, no_of_words) => {
        return str.split(" ").splice(0,no_of_words).join(" ");
    }
    return (
        <div className="animal_card">
            <img src={img} alt ={name}/>
            <h3>{name}</h3>
            <em>{aclass}</em>
            <p>{truncate(desc,30)}.....</p>
            <Link to = {`/${animal.id}`}>Read more...</Link>
        </div>
    )
}
