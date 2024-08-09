let a: Array<number> = [5, 5, 5];
//TODO: it cannt return any extra
function identty0ne(val: number | boolean): number | boolean {
  return val;
}
// TODO: WE CAN TAKE TAKE NUMBER AS AN INPUT AND CAN RETURN A STRING
function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  if (typeof val == 'number') {
    return (val + 1) as Type;
  }
  return val;
}
console.log(identityThree<number>(6));
function identityFour<T>(obj: T): T {
  return obj;
}
interface Bootle {
  brand: string;
  amount: number;
}
console.log(identityFour<Bootle>({ brand: 'cock', amount: 600 }));
