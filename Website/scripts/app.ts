import { SampleCodeTester } from "./library.js"

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Fred", "M.", "Smith");

window.onload = () => {
    $("#ts-example").html(greeter(user));
    let tester = new SampleCodeTester();
    tester.testJQuery();
    tester.testApi();
};