import React, { useState } from "react";
import './nota.css'



const Nota = ( {nota, handleClick})=>{
    let toggleImportance
    const [important, setImportant] = useState(false)
    if ( typeof handleClick == 'undefined') {
            toggleImportance = ()=>{setImportant(!important); console.log("Toggle",important);}
    }
    else {
        toggleImportance = handleClick
    }

    const label = important 
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