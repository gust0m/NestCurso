import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

// export class Pokemon {
//     public id: number;
//     public name: string;
//     public type: string;

//     constructor(id: number, name: string, type: string){
//         this.id = id;
//         this.name = name;
//         this.type = type;
//         console.log('Constructor llamado')
//     }
// }


export class Pokemon {

    get imageURL(){
        return `https://pokemon.com/${ this.id }.jng`
    }

    constructor(
        public readonly id: number,
        public name: string,
        public type: string)
        {}


        public scream(){
            console.log(`${ this.name.toUpperCase() }!!!`);
        }

        speak(){
            console.log(`${ this.name }, ${ this.name }`);
        }

        async getMoves(): Promise<Move[]> {
            // const resp = 10;
            const { data } = await axios.get  <PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
            console.log(data.moves) 

            return data.moves;
        }
}

export const bulbasur = new Pokemon(4,'pikachu', 'electrico');

console.log(bulbasur)
console.log (bulbasur.getMoves() );
// bulbasur.scream();
// bulbasur.speak();