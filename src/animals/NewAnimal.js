import React from 'react'

export default function NewAnimal({changeHandler,submit,aclass}) {
    
    return (
        <form onSubmit = {submit}>
            <label>Name</label>
            <input type="text" name ="name" onChange= {changeHandler} required/>
            <label htmlFor= 'aclass'>Class</label>
            <select name ='aclass' value = {aclass} onChange={changeHandler}>
                <option value="mammals"> Mammals</option>
                <option value="birds">Birds</option>
                <option value="reptiles">Reptiles</option>
                <option value="amphibians">Amphibians</option>
                <option value="invertebrates">Invertebrates</option>
            </select>

            <label htmlFor='img'>Image Url</label>
            <input type="text" name ="img" onChange= {changeHandler} required/>

            <label htmlFor='desc'>Description</label>
            <input type="text" name ="desc" onChange= {changeHandler} required/>

            <label htmlFor='link'>Read More</label>
            <input type="url" name ="link" onChange= {changeHandler} required/>

           <button type= 'submit'>Add New Animal</button>
        </form>
    )
}
