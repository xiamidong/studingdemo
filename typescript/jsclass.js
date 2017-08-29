// function Pet(word) {
//   this.word = word;
//   this.speak = function(tall) {
//     console.log(tall + this.word);
//   };
// }

// var dog = {
//   word: 'wang'
// };

// var cat = new Pet('miao');
// cat.speak.call(dog, 'speak');

function Pet(words) {
  this.words = words;
  this.speak = function() {
    console.log(this.words);
  }
  this.tall = function() {
    console.log(this.words)
  }
}
function Dog(words) {
  Pet.call(this, words);
  Pet.apply(this, arguments);
}
var dog = new Dog('wang');
dog.tall();