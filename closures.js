// // retains state and scope after the function returns
// // a closure is the local variables for a function — kept alive after the function has returned


// // The Story of a Counter

// var counter = 0;

// // simplest example of a closure
// function globalAdding(){
//   console.log("adding with counter:" + counter)
//   return counter += 1;
// }

// why do we have access to counter?

// --- First Immediately Invoked Function Expression <3
// (function(){
//   console.log("EXAMPLE 1 -- complete")
// })()

// execute
// globalAdding()











// function addLocalScope(){
//   var counter = 0;
//   return counter += 2;
// }

// what's going on here?

// (function(){
//   console.log("EXAMPLE 2 -- complete")
// })()




















// function addWithFunction(){
//   var counter = 0;
//   function plus(){
//     counter += 1;
//   }
//   plus()
//   return counter;
// }

// // Third Stop ---
// (function(){
//   console.log("EXAMPLE 3 -- complete...")
// })()




















var addClosure = function () {
    var counter = 0;
    return function (){
      return counter += 1;
    };
};

(function(){
  console.log("Example 4 -- complete")
})()



















// // Closure + Self invoking function to provide encapsulation

var add = (addClosure)();

var addAnonymous = (function () {
    var counter = 0;
    return function (){
      return counter += 1;
    };
})();

// addAnonymous();
// addAnonymous();

// // A different example of closure + immediately invoked function expression
// how can we change WHEN the function is executed or called?

var sayHola = (function(firstName, lastName){
  var firstName = firstName;
  var lastName = lastName;

  return function say() {
    return ("Hello, " + firstName + " " + lastName);
  }
})("Jaclyn", "Karnowski");

// why might using immediately invoked function expressions be a horrible way to run this function?

// how are these two ways of executing the function different? What does it affect?
var danke = (sayHola);
var hello = sayHola();

// // #### Fifth Stop ---
(function(){
  console.log("EXAMPLE - 5...")
})()





// // closure for private variables + encapsulation

function AddUp (){
  var counter = 0;

  this.addTwo = function(){
    return counter += 2;
  }
}

var sum = new AddUp()
sum.addTwo();
sum.addTwo();

// // Sixth Stop ---
(function(){
  console.log("END OF EXAMPLE - 6...")}
  )()
























