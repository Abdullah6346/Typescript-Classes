abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public darkMode: boolean,
    public filter: string,
  ) {}
  abstract getsapia(): string;
}
class Instagram extends TakePhoto {
  getsapia() {
    return `Hello I am not defined in the abstarct class`;
  }
}

const firstperson = new Instagram('black', true, 'filtered');
export {};
