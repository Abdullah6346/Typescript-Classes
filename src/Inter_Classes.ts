interface TakePhoto{
    cameraMode:string
    Burst:number
    nightMode:boolean
    filter:string
}
interface Story{
    create_story:()=>void
}

class Instagram implements TakePhoto{
    constructor(        public cameraMode:string,
        public Burst:number,
        public  nightMode:boolean,
        public filter:string
        ){
    }
}
class YouTube implements TakePhoto,Story{
    constructor(        public cameraMode:string,
        public Burst:number,
        public  nightMode:boolean,
        public filter:string,
        public short:string
        ){
        }
        create_story():void{
            console.log("Story was created ")
        }
}
