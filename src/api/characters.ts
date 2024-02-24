import { instance } from "./baseApi"

export const endpoint = "character"

export const characters = {
    getAll: function({page = 1}:{page?:number}){
        return instance.get(endpoint, {
            params: {
            page
        }})
    },
    getByID: function({ id }:{id:string | undefined}){
        return instance.get(`${endpoint}/${id}`)
    }
}