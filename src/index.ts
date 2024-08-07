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
const userone = new User("gladdy","gladdy@.com","Faisalabad")
console.log(userone)
export{}