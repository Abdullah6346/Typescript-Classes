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
// TODO: Modern Way: to write classes constructures
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
//TODO:getters and setters and use of protected
class Student {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        this._coursecount = 1;
    }
    get studentemail() {
        return `Email is ${this.email}`;
    }
    get coursecount() {
        return this._coursecount;
    }
    set coursecount(coursecount) {
        if (coursecount <= 1) {
            throw new Error("Not possible Beacause You are on a free trial ");
        }
        this._coursecount = coursecount;
    }
}
class SubStudent extends Student {
    // now I can use _course
    chang_course_count() {
        this._coursecount = 10;
        console.log(this._coursecount);
    }
}
const subabdullah = new SubStudent("Gladdy", "gladdy@gmail.com", "888");
subabdullah.chang_course_count();
const abdullah = new Student("Abdullah", "h@hgmail.com", "123");
// abdullah._coursecount
console.log(abdullah.coursecount);
