import React from "react"
import Form from "../components/Form"
import { create } from "react-test-renderer"

let component;
const props = {
    history: {},
    handleSumbit: ()=>{}
}
describe("<Form />", ()=>{
    //Primer caso de prueba
    //  -- empezar con una instancia limpia del componente
    beforeEach( ()=>{
        component = create(<Form {...props} />)
    })
    it ("Renderiza correctamente", ()=>{
        expect(component).toBeDefined();  //componente definido
        expect(component.toJSON().type).toEqual("form") // su tipo sea "form"
        expect(component.root.findByType("input")).toBeDefined() //tenga un hijo "input"
        expect(component.root.findByType("button")).toBeDefined() //tenga un hijo "button"
        expect(component.root.findByType("svg")).toBeDefined() //tenga un hijo "svg"
        console.log( component.toJSON())   
    })
})