import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { prettyDOM } from "@testing-library/dom";

import Nota from '../components/Nota'

test ('Test renderizado componente', ()=>{
    const nota = { content:'Esto es un test', important:true}

    const component = render(<Nota nota={nota}></Nota>)
 
    //Testar componente contiene texto
    component.getByText("Esto es un test") //throw error si no encuentra texto en html
    //component.getByText("Quitar Important")//throw error si no encuentra texto en html
    expect(component.container).toHaveTextContent(nota.content)
    
    //Testar existencia elementos html
    expect( component.container.querySelector("button") ).not.toEqual(null)


  
})

test ('Test click en boton buscar', ()=>{
    const nota = { content:'Esto es un test', important:true}

    const mockhandler = jest.fn()

    const component = render(<Nota nota={nota} handleClick={mockhandler}></Nota>)

    //Testar evento click en elemento
    const boton =  component.container.querySelector("button") 
    //console.log( prettyDOM( boton ))
    //console.log(  boton )
    fireEvent.click( boton )
    expect (mockhandler.mock.calls).toHaveLength(1)


})

