import React, { useState } from "react";
import './nota.css'
import i18n from '../i18n/index'


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
    ? i18n.NOTA.BOTON_QUITAR
    : i18n.NOTA.BOTON_PONER

    return (
        <li className="nota">
            <div>
                { nota.content}
            </div>
            <button className='boton' onClick = {toggleImportance}>{label}</button>
        </li>
    )
}
export default Nota