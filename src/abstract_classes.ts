abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public darkMode: boolean,
    public filter: string,
  ) {}
  abstract getsapia(): string;
}
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public darkMode: boolean,
    public filter: string,
  ) {
    super(cameraMode, darkMode, filter);
  }
  getsapia(): string {
    return `Hello I am not defined in the abstarct class`;
  }
  getcameramode(): string {
    return `Camera Mode is ${this.cameraMode}`;
  }
}

const firstperson = new Instagram('black', true, 'filtered');

console.log(firstperson.getcameramode());
console.log(firstperson.getsapia());
export {};
