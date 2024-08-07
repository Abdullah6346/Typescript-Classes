// Getterand setters
class Name{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname
    }
   get ShowFullName(){
        return `New name is ${this.firstname} ${this.lastname}`
    }
    set ShowFullName(newname){
        let[firstname,lastname]=newname.split(" ")
        this.firstname=firstname
        this.lastname=lastname
        console.log(firstname)
    }

}
 const newName=new Name("Muhammad","Abdullah")
 newName.ShowFullName="Muhammad Ali"
 console.log(newName.ShowFullName)



//  Setter
// class Person{
//     constructor(name,age,id,email){
//         this.name=name
//         this.email=email
//         this.age=age
//         this.id=id
//     }
//     set getid(newid){
//         this.id=newid
//     }

// }
// const newPerson=new Person("gladdy",24,"1221","gladdy123@gmail.com")
// newPerson.getid="12345"

// console.log(newPerson.id)