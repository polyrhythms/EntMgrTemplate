import { SampleCodeTester } from "./library.js";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Fred", "M.", "Smith");
window.onload = () => {
    $("#ts-example").html(greeter(user));
    let tester = new SampleCodeTester();
    tester.testJQuery();
    tester.testApi();
};
//# sourceMappingURL=app.js.map