// function greeter(person: string) {
//   return "hello, " + person;
// }
// var user = 'Jane User';
// console.log('document',document.body);
// document.body.innerHTML = greeter();
// interface Person {
//   firstName: string;
//   lastName:  string;
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " + person.
// }
var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + middleName + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.lastName;
}
var user = new Student('lv', 'jun', 'xia');
document.body.innerHTML = greeter(user);
