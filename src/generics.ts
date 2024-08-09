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

// TODO:ARRAYS

function get_products<t>(array: t[]): t {
  const index = 1;
  return array[index];
}
console.log(get_products([0, 1, 2, 3]));
// TODO: WE USE HERE , FOR BEING NOT CONFUSED <T ,>
const getmore_produc = <T>(array: T[]): T[] => {
  return array;
};
console.log(getmore_produc(['Sugar', 'Cup', 'Milk', 'tea']));

// TODO: mORE THAN ONE GENERICS

interface id {
  userid: string;
  name: string;
}

function getuserd<Type extends id>(user: Type): string {
  return `User id is ${user.userid}`;
}
console.log(getuserd({ userid: '665544', name: 'Gladdy' }));
