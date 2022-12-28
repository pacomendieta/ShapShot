import React from "react";
import './nota.css'



const Nota = ( {nota })=>{
    const toggleImportance = ()=>nota.important = !nota.important
    const label = nota.important 
    ? 'Quitar Important' 
    : 'Hacer Important'

    return (
        <li className="nota">
            <div>
                { nota.content}
            </div>
            <button onClick = {toggleImportance}>{label}</button>
        </li>
    )
}
export default Nota