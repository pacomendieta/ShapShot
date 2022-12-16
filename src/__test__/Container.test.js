//Imports react y componente a probar
import React from "react"
import Container from "../components/Container"
import Loader from "../components/Loader"
import { create, act } from "react-test-renderer"
import PhotoContextProvider from "../context/PhotoContext"
import Gallery from "../components/Gallery"

jest.mock('../Components/Container')
let component;

describe("<Container /> Test",  ()=>{
    //instancia componente 
    beforeEach( ()=>{
        
        component = create( 
            <PhotoContextProvider>
                <Container searchTerm="" />
            </PhotoContextProvider>
        )
    })
   //caso de prueba 1 
    it ("Render inicial correcto (incialmente con Loading y sin imagenes)", ()=>{
        expect(component.root).toBeDefined()
        expect(component.root.findByType(Container)).toBeDefined()
        expect(component.root.findByType(Loader)).toBeDefined()
        expect(component.root.findAllByType(Gallery).length).toEqual(0)

    })

    it ("Llama a la API si cambia el texto de búsqueda", async ()=>{
        await component.update( 
            <PhotoContextProvider>
                <Container searchTerm="moto" />
            </PhotoContextProvider>
        )
    })
    //console.log("JEST:", jest)


})