
import React from 'react'
import { useState } from 'react'
import Tarea from '../Tarea/Tarea';


const ListaQehaceres = () => {

    const [tareas, setTareas] = useState([]);
    const [newtareas, setNewTareas] = useState("");

    const handleNewTareas = (e) =>{
        e.preventDefault();
        let aux = [...tareas];
        aux.push({name: newtareas, status: false})
        setTareas([...aux]);
        console.log("tareas:", aux);
        setNewTareas("");
    }

    const handleStatusChange = ( value, idx) =>{
        let aux = [...tareas];
        aux[idx].status= value;
        setTareas([...aux]);
    }

    const handleDeleteChore = ( idx) =>{
        let aux = [...tareas];
        let filtered = aux.filter((value,index,array) => index !== idx)
        setTareas([...filtered]);
    }


    return (
        <>
            <form onSubmit={handleNewTareas }>
                <input type="text" value={newtareas} onChange={(e) => setNewTareas(e.target.value)}/>
                <button>Agregar</button>
            </form>

            <ul>
                {tareas.map((item, idx, list) =>{
                    return (
                        <Tarea key={"tarea" + item + idx} {...item} handleStatus={handleStatusChange} index={idx} handleDelete={handleDeleteChore}/>
                    )
                })}
            </ul>
        </>
    )
}

export default ListaQehaceres