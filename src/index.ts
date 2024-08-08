// Private vs Readonly
class User{
    public    name:string
    private city:string //hash can also be used #city
    public email:string
    constructor(name:string,email:string,city:string){
         this.name=name
        this.email=email
        this.city=city
    }
} 
class Readonly{
   readonly username:string
   constructor(username:string){
    this.username=username
   }
}


const userone = new User("gladdy","gladdy@.com","Faisalabad")
// userone.city not possible
const user=new Readonly("gladdy")
// user.username Possible in Readonly
console.log(userone)

// TODO: Modern Way: to write classes constructures
class Students{
    constructor (
         public name:string,public email:string,private id:string
        ){

    }
}
const firstStudent=new Students("gladdy","gladdy1234@gmail.com","8-990-9")
const secondStudent=new Students("Umar","Umar664@gmail.com","890-98-98")
console.log(firstStudent,secondStudent)
export{}
//TODO:getters and setters 
class Student{
    private _coursecount=1
    constructor (
         public name:string,public email:string,private id:string
        ){
     
    }
    get studentemail():string{
        return `Email is ${this.email}`
     }   
     get coursecount():number{
        return this._coursecount
     }
     set coursecount(coursecount){
        if(coursecount<=1){
              throw new Error("Not possible Beacause You are on a free trial ")
        }
        this._coursecount=coursecount
     }

}

const abdullah=new Student("Abdullah","h@hgmail.com","123")
abdullah.coursecount=5

console.log(abdullah.coursecount) 










