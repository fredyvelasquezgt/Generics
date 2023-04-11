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
