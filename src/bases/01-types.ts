export const name: string  = 'Gustom'; // let line 5 firts UP
export const age: number = 21;
export const isValid: boolean = true; 

//name = 'melissa';
//name = true;
//name = 123;

export const templateString =`Esto es un string
multilinea
que puede tener
"" dobles
'' simples
inyectar valores ${name}
expresiones ${ 1 + 1 }
numeros: ${age}
booleanos: ${isValid}`

console.log(templateString)
