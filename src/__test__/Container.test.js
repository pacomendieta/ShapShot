//Imports react y componente a probar
import React from "react"
import Container from "../components/Container"
import Loader from "../components/Loader"
import { create, act } from "react-test-renderer"
import PhotoContextProvider from "../context/PhotoContext"
import Gallery from "../components/Gallery"
import axios from "../__mocks__/axios"

jest.mock('../Components/Container')
let component;

describe("<Container /> Test",  ()=>{
    //instancia componente antes de los casos de prueba. Carga en asincrono con act y create
    beforeEach( async ()=>{
        await ( act (async ()=>{
                    component = await create( 
                        <PhotoContextProvider>
                            <Container searchTerm="" />
                        </PhotoContextProvider>
                    )         
                })
        )})

   //caso de prueba 1 
    it ("Render inicial correcto (sin el Loading y con las imagenes)", ()=>{
        expect(component.root).toBeDefined()
        expect(component.root.findByType(Container)).toBeDefined()
        //expect(component.root.findByType(Loader)).toBeDefined()   (el loader desaparece antes del test y da error. carga gallery mas rapida que el test ?)
        expect(component.root.findAllByType(Gallery).length).toEqual(1)
    })

    it ("Llama a la API si es necesario o si cambia el texto de búsqueda",  async ()=>{
        //cambiar respuesta de la api en este test, para poder chequear que llega data.
        axios.get.mockImplementation(()=>Promise.resolve({
            data:{
                photos: {
                    photo:[{farm: "farmTest01", server: "serverTest", id:"testid01", secret:"sfsdf", title:"titleTest91"}]
                }
            }
        }))
        const testData = { 
            data: { 
                photos: { 
                    photo:[{farm: "farmTest01", server: "serverTest", id:"testid01", secret:"sfsdf", title:"titleTest91"}] 
                }
            }
        }
        //--

        //-- Provocar cambio en el componente, cambiando el texto de busqueda
        await act ( async ()=>{
            await component.update( 
                <PhotoContextProvider>
                    <Container searchTerm="moto" />
                </PhotoContextProvider>
            )
        })
        // Testear que se produjeron las llamadas al API: 3 veces al Get y ninguna a Post
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(3);
        expect(axios.post).not.toHaveBeenCalled();
        // Testear que se recibio el data desde el api
        expect(component.root.findByType(Gallery).props.data).toEqual(testData.data.photos.photo)

    })

    //console.log("JEST:", jest)


})