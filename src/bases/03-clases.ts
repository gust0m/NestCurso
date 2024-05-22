import axios from "axios";

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

        async getMoves(){
            // const resp = 10;
            const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
            console.log(resp.data.moves)
        }
}

export const bulbasur = new Pokemon(4,'pikachu', 'electrico');

bulbasur.scream();
bulbasur.speak();