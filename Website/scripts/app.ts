/// <reference path="declarations/kendo.all.d.ts" />

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

let user = new Student("Ronald", "M.", "Jones");

window.onload = () => {
    $("#example1").html(greeter(user));

    $("#textbox").kendoTextBox({
        label: {
            content: "Full Name:"
        }
    });

    let tester = new SampleCodeTester();
    tester.testJQuery();
    tester.testApi();
};
