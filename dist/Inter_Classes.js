"use strict";
class Instagram {
    constructor(cameraMode, Burst, nightMode, filter) {
        this.cameraMode = cameraMode;
        this.Burst = Burst;
        this.nightMode = nightMode;
        this.filter = filter;
    }
}
class YouTube {
    constructor(cameraMode, Burst, nightMode, filter, short) {
        this.cameraMode = cameraMode;
        this.Burst = Burst;
        this.nightMode = nightMode;
        this.filter = filter;
        this.short = short;
    }
    create_story() {
        console.log("Story was created ");
    }
}
