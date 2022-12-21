import React from 'react'
import { create, act } from "react-test-renderer"
import Gallery from "../components/Gallery"
import NoImages from '../components/NoImages';
import Image from '../components/Image';

let component;
const props = {
    data: []
}

describe("<Gallery /> test", ()=>{
    beforeEach(async ()=>{
        component = await create(<Gallery {...props} />)
    })

    // Caso1: Renderiza
    it ("Renderiza Gallery correctamente", ()=>{
        expect(component).toBeDefined();
        expect(component.root.findByType("div")).toBeDefined()
        expect(component.root.findByType("ul")).toBeDefined()

    })

    it ("Muestra NoImages si data vacia", ()=>{
        expect(component.root.findByType(NoImages).toBeDefined)
    })

    it ("Renderiza las imagenes si data no vacia o si cambia", async ()=>{
        const data = [
            {farm: "farmTest01", server: "serverTest", id:"testid01", secret:"sfsdf", title:"titleTest91"},
            {farm: "farmTest02", server: "serverTest", id:"testid02", secret:"sfsdf", title:"titleTest02"},
            {farm: "farmTest03", server: "serverTest", id:"testid03", secret:"sfsdf", title:"titleTest03"},
            {farm: "farmTest04", server: "serverTest", id:"testid04", secret:"sfsdf", title:"titleTest04"},
        ]
        await act ( async()=>{
            await component.update(<Gallery data={data} />)
        })
        expect(component.root.findAllByType(NoImages).length).toEqual(0)
        expect(component.root.findAllByType(Image).length).toEqual(data.length)

        //Comprobar el titulo de la imagen 1 renderizada coincide con el de la imagen 1 en data
        let imagenuno = component.root.findAllByType(Image)[0]
        expect(imagenuno.props.alt).toEqual(data[0].title)
        //console.log("Imagen Uno:", imagenuno.props)
    })

})