"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, darkMode, filter) {
        this.cameraMode = cameraMode;
        this.darkMode = darkMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, darkMode, filter) {
        super(cameraMode, darkMode, filter);
        this.cameraMode = cameraMode;
        this.darkMode = darkMode;
        this.filter = filter;
    }
    getsapia() {
        return `Hello I am not defined in the abstarct class`;
    }
    getcameramode() {
        return `Camera Mode is ${this.cameraMode}`;
    }
}
const firstperson = new Instagram('black', true, 'filtered');
console.log(firstperson.getcameramode());
console.log(firstperson.getsapia());
