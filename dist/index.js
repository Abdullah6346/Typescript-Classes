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
const userone = new User("gladdy", "gladdy@.com", "Faisalabad");
console.log(userone);
