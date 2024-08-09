interface Quiz {
  name: string;
  type: string;
}
interface Courses<T> {
  nameid: T;
  name: string;
  use: string;
  type: string;
  author: string;
}

class Sell_able<T> implements Courses<T> {
  constructor(
    public name: string,
    public nameid: T,
    public type: string,
    public use: string,
    public author: string,
  ) {}
}
const firstcourse = new Sell_able(
  'Abdullah',
  '56547',
  'Html',
  'WEb DEv',
  'HArry',
);
console.log(firstcourse);
