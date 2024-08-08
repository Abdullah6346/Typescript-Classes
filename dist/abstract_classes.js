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
    getsapia() {
        return `Hello I am not defined in the abstarct class`;
    }
}
const firstperson = new Instagram('black', true, 'filtered');
