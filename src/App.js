import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import Fighters from './components/Fighters';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


function App() {

  const [fighters, setFighters] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const initialUrl = "https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=7d0dda140f9e4cd1a7c254820e002b2d"
  const fetchFighters = async(url) => {
    await axios.get(url)
    .then(response => {
      setFighters(response.data)
    })
    /* .then(data => setFighters(data)) */
    .catch(error => console.log(error))
  };

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadoBusqueda=fighters.filter((elemento)=>{
      if(elemento.FirstName.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.LastName.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    })
    setFighters(resultadoBusqueda)
  }

  useEffect(() => {
    fetchFighters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="MMA Fighters Information" />
    
      <div className='container'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0bfe7b44427195.58122b55407cd.png" style={{maxWidth: "950px"}} className="center mb-4"></img>
        <div className='containerInput'>
          <input
            className='form-control inputBuscar'
            value={busqueda}
            placeholder='Búsqueda por nombre o empresa'
            onChange={handleChange}
          />
        </div>
        <Fighters fighters={fighters}/>
      </div>
    </>
  );
}

export default App;
