import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { prettyDOM } from "@testing-library/dom";

import Nota from '../components/Nota'

describe("Agrupacion de Casos de Prueba",()=>{
    let component;
    const nota = { content:'Esto es un test', important:true}
    const mockhandler = jest.fn()
    beforeEach( ()=>{
        component = render(<Nota nota={nota} handleClick={mockhandler}></Nota>) 
    })

    test ('Test renderizado componente', ()=>{
    
        //Testar componente contiene texto
        component.getByText("Esto es un test") //throw error si no encuentra texto en html
        //component.getByText("Quitar Important")//throw error si no encuentra texto en html
        expect(component.container).toHaveTextContent(nota.content)
        
        //Testar existencia elementos html
        expect( component.container.querySelector("button") ).not.toEqual(null)
    
      
    })
    
    test ('Test click en boton buscar', ()=>{
        const nota = { content:'Esto es un test', important:true}
     
        //Testar evento click en elemento
        const boton =  component.container.querySelector("button") 
        //console.log( prettyDOM( boton ))
        //console.log(  boton )
        fireEvent.click( boton )
        expect (mockhandler.mock.calls).toHaveLength(1)
        expect ( boton ).toHaveClass('boton')
        //expect ( boton ).toHaveStyle('background-color:rgb(181, 239, 181)')
    
    
    })
    

})


