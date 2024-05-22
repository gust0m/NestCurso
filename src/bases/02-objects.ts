export const pokemonsIds = [1,20,30,34,99];

// export const  pokemon = {

//     id:1,
//     name:'pikachu',
//     type:'electric'
// }

/* un ? alado de un tipo permite que pueda pasar sin existir sin el es obligatoria
esto permite la busqueda de errores / excepciones de manera mas precisa*/
interface Pokemon {
    id:number;
    name:string;
    type:string;
    age?:number;

}

export const bulbasur:Pokemon = {

    id:1,
    name:'pikachu',
    type:'electric',
    age: 12
}
export const pika:Pokemon = {

    id:2,
    name:'pikachu',
    type:'electric'
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasur,pika);

//console.log(pokemons);