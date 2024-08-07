"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Private vs Readonly
class User {
    constructor(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
    }
}
class Readonly {
    constructor(username) {
        this.username = username;
    }
}
const userone = new User("gladdy", "gladdy@.com", "Faisalabad");
// userone.city not possible
const user = new Readonly("gladdy");
// user.username Possible in Readonly
console.log(userone);
// Modern Way: to write classes constructures
class Students {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}
const firstStudent = new Students("gladdy", "gladdy1234@gmail.com", "8-990-9");
const secondStudent = new Students("Umar", "Umar664@gmail.com", "890-98-98");
console.log(firstStudent, secondStudent);
