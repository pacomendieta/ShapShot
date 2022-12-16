// jest.mock("axios") //mock por defecto

export default {
    get: jest.fn  ().mockImplementation( ()=>Promise.resolve({
        data:{
            photos: {
                photo:[]
            }
        }
    })),
    post: jest.fn ().mockImplementation( ()=>Promise.reject("Error en el post")),
    put: jest.fn  ()
}