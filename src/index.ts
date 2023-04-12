function numberIdentity(item: number):number {
  return item;
}

function stringIdentity(item: string):string {
  return item;
}


function booleanIdentity(item: boolean):boolean {
  return item;
}

//esto le quita el sentido a typescript porque no utilizo el tipado
function identity(item: any):any {
  return item;
}

interface Cat {
  name:string;
  breed:string;
}

//esta es una version generica que recibe un tipo y devuelve algo de ese mismo tipo
function identity<Type>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>("hello");
identity<Cat>({})

//ahora trabajo con un array
function getRandomElement<T>(list: T[]):T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a","b", "c"]));
getRandomElement<number>([1,2,3,4,2121,32])

getRandomElement([1,4,2,4,2])

//esta funcion recibe dos objetos que pueden ir armados de cualquier tipo
//usando extends object le digo que tiene que ser algo de tipo object
function merge<T extends  object ,U extends object>(object1:T, object2:U) {
  return {
    ...object1,
    ...object2
  }
}

const comboObj =  merge({name:'fredy'}, {pets: ['blue', 'elton']});

interface Lengthy {
  length:number;
}

function printDoubleLenght<T> (thing: T): number {
  return thing.length * 2
}

function printDoubleLenght(thing: Lengthy): number {
  return thing.length * 2
}

printDoubleLenght("asdfsd")
//printDoubleLenght(123)
