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

class Student {
  fullName: string;
  firstName: string;
  constructor(firstName, public middleName, public lastName) {
    this.fullName= firstName + middleName + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.lastName;
}

var user = new Student('lv', 'jun', 'xia');
document.body.innerHTML = greeter(user);
