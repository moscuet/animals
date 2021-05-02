import React, {useState, useEffect} from "react";
import AnimalsList from '../../animals/AnimalsList'
import NewAnimal from '../../animals/NewAnimal'
import axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import AnimalSingle from '../../animals/AnimalSingle'
const Main = () => {
  const [animals, setAnimals]= useState([])
  const [newAnimal, setNewAnimal]=useState({
    name:'',
    sclass:'mammals',
    img:'',
    desc:'',
  });

  useEffect( ()=>{
    const getData = async () =>{
      axios.get('http://localhost:3001/animals')
     .then( response =>{
      setAnimals(response.data)
     })
    }
    getData()
    },[])

  const changeHandler = (e) =>{
    setNewAnimal({...newAnimal, [e.target.name]:e.target.value})
  }
  const submitAnimal = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/animals',newAnimal)
    .then( ()=>{
      return axios.get("http://localhost:3001/animals")
    })
    .then( response => setAnimals(response.data))
    e.target.reset()
  }

  return (
    <main>
      <Switch>
         <Route path='/:id'>
           <AnimalSingle/>
         </Route>
         <Route path ='/' exact>
           <AnimalsList animals = {animals}/> 
           <NewAnimal changeHandler= {changeHandler} submit = {submitAnimal}/>
          </Route>
      </Switch>
    </main>
  );
};

export default Main;
