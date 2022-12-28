import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'

import Nota from '../components/Nota'

test ('Test renderizado', ()=>{
    const nota = { content:'Esto es un test', important:true}

    const component = render(<Nota nota={nota}></Nota>)
    //Testar componente contiene texto
    component.getByText("Esto es un test")
    component.getByText("Quitar Important")
    expect(component.container).toHaveTextContent(nota.content)
    //Testar existencia elementos html
    expect( component.container.querySelector("button") ).not.toEqual(null)


    //Testar evento click en elemento
    const boton =  component.container.querySelector("button") 
    fireEvent.click( boton )

    //console.log("LI=",li)


    //console.log("COMPONENT:", component)
})