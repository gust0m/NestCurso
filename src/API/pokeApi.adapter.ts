import axios from "axios";
import { Type } from '../interfaces/pokeapi-response.interface';


export class pokeApiFetchAdapter {

    async get<Type>( url: string): Promise<Type>{
        const resp = await fetch( url );
        const data: Type = await resp.json();

        return data;
    }
}

export class pokeApiAdapter {
    private readonly axios = axios;

    async get<Type>( url: string ){
        const { data } = await this.axios.get<Type>(url);

        return data;
    }

    async post ( url: string , data: any){
        
    }
    
    async patch ( url: string , data: any){
        
    }

    async put ( url: string , data: any){
        
    }

    async delete ( url: string ){
        
    }
}