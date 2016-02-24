// What's my SCOPE?
// the first example is ready to go
// uncomment example by example

var say = "I'm saying something and I am the FIRST example!"
console.log(say);

SAY = "declared above the DOM is ready...";
// example 0.1
// console.log(SAY);

//
$( document ).ready(function(){
  // example 1 - what do you expect to log to the console?
  console.log("1 - " + SAY);

  console.log(outsideDocReady);

  // example 2  - What's the SCOPE?
  var favoriteWater = "water that comes from volcanic rivers";
  console.log("2 - " + favoriteWater);

  // ex 3: named function - What's the SCOPE of the variables? the function?
  console.log("EX 3:");
  greetingsFromCharacters("Jack Sparrow");

  // ex 4: anonymous function, not stored in a variable / What's its scope?
  // 2 What variables are local? global?
  // console.log("EX 4:");
  // say("Brenda");

// named function / What's the scope of the variable?
  // console.log("Ex 5 - let's inspect: girls")
  console.log(girls(name));

// object literal / scope?
  // console.log("Ex 6 - movies is an object literal")
  console.log(movies);

// how to access attribute in an object
  console.log(movies.title);

// object literal with a function / scope of the function? of the variables?
  console.log(movies.say());

// object literal / scope of the attributes?
  // console.log("Ex 7 - let's inspect: newCharacter")
  // console.log(newCharacter);
  // console.log(newCharacter.name);
  // console.log(newCharacter.talk());

// TRIPLE nested function
  // what does this execute?
  // console.log("Ex 8a - ice cream #1")
  // iceCream()();

  // console.log("Ex - 8b - ice cream #2")
  // iceCream()()();

  // return the results of an inner function
  // saveName("wonderwoman");

})

var outsideDocReady = "outside doc ready. Am I local or global?"

// INSIDE A NAMED FUNCTION
// scope:
var greetingsFromCharacters = function(captain) {
  console.log("Arr Arr, my name is " + captain);
  console.log("inside greetingsFromCharacters....outsideDocReady:" + outsideDocReady)
  // part 2 of this example: do we have access to favoriteWater?
  // console.log("can we see favoriteWater?" + favoriteWater);
}

// run AFTER showing "Jack Sparrow"
// When does this function execute?
// greetingsFromCharacters("Pink");

// // anonymous function, doesn't belong to a variable
// scope: window
function say(hello) {
  console.log("inside the SAY function.. Hello, " + hello);
  // where does 'name' start and end?
  // how can the scope be changed?
  name =  "Girl Develop It",
  sayMyName =  function() {
    // where does 'name' start and end?
    name = "Jaclyn Karnowski";
    console.log("What is my name? name: " + name);
    console.log("still inside sayMyName, this.name:" + this.name + "?");
  }
  console.log("AFTER sayMyName ---- what NAME will I see?");
  console.log(name);
  // what happens to the scope of 'name' if we do NOT return sayMyName()?
  return sayMyName();
};

// named function
// where does 'name' come from?
var girls = function(name) {
  console.log("org or my name?: " + name);
}

// OBJECT LITERAL
// stores properties and behaviors
var movies = {
  title : "Inside the movies object",
  say: function(hello) {
    this.name =  "Rosie the Riveter";
    console.log("what am I?");
    console.log(this);
    console.log("name:" + this.name);
    console.log("SURPRISE! name ---" + name);
  }
}

// new object literal
var newCharacter = {}
// set attribute for object
newCharacter.name = "Shrek"
// set attribute that points to a function
newCharacter.talk = function () {
  this.cheering = "Hello!"
  console.log(this.cheering + "  So where is this fire-breathin' pain in the neck, anyway?");
}

// return inner function
var saveName = function (superhero) {
  function capitalizeName () {
    console.log(superhero.toUpperCase());
  }
  var capitalized = capitalizeName();
  console.log("is capitalized available?: ")
  console.log(capitalized);
}

// console.log(say);

// let's run this here too!
// saveName("wonderwoman");

// TRIPLE nested function
function iceCream() {
  var cones = "waffle"

  return function(){
    var sprinkles = "cherry"
    console.log("one level deep: " + cones)
    return function(){
      console.log("2 levels deep: " + sprinkles)
    }
  }
}
