// // retains state and scope after the function returns
// // a closure is the local variables for a function — kept alive after the function has returned


// // The Story of a Counter

counter = 0;

// simplest example of a closure
function globalAdding(){
  console.log("adding with counter:" + counter)
  return counter += 1;
}

// why do we have access to counter?
// why might this be too much scope?

// globalAdding()
// --- First Immediately Invoked Function Expression <3
(function(){
  console.log("EXAMPLE 1 -- complete")
})()

// // execute











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

// // // Third Stop ---
// (function(){
//   console.log("EXAMPLE 3 -- complete...")
// })()




















// var addClosure = function () {
//     var counter = 0;
//     return function (){
//       return counter += 1;
//       // console.log(counter += 1);
//     };
// }();

// var mike = addClosure();

// // next: make this into an IFFE

// (function(){
//   console.log("Example 4 -- complete")
// })()



















// // Closure + Self invoking function to provide encapsulation
  // var addAnonymous = function () {
  //   var counter = 0;
  //     return function (){
  //       return counter += 1;
  //     };
  //     // return addAnonymous();
  // }();

// var anon = addAnonymous();
// anon()

// WHAT WILL HAPPEN HERE???
// function doSomething(){

//   var addAnonymous = function () {
//     var counter = 0;
//       return function (){
//         return counter += 1;
//       };
//   }();
//   return addAnonymous();
// };

// doSomething()

// addAnonymous();
// addAnonymous();

// // A different example of closure + immediately invoked function expression
// how can we change WHEN the function is executed or called?

// var sayHola = (function(firstName, lastName){
//   var firstName = firstName;
//   var lastName = lastName;

//   return function say() {
//     return ("Hello, " + firstName + " " + lastName);
//   }
// })('jac', 'perez');

// // // // why might using immediately invoked function expressions be a horrible way to run this function?

// // // // how are these two ways of executing the function different? What does it affect?
// var danke = (sayHola);
// var hello = sayHola();

// // // // #### Fifth Stop ---
// (function(){
//   console.log("EXAMPLE - 5...")
// })()





// // closure for private variables + encapsulation

function AddUp (){
  var counter = 0;

  var resultsObject  = {
    addTwo: function(){
      return counter += 2;
    }
  }
  return resultsObject;
}

var sum = new AddUp()
// sum.addTwo();
// // sum.addTwo();

// // // can you execute this function without setting up an object?

// // // // Sixth Stop ---
// (function(){
//   console.log("END OF EXAMPLE - 6...")
// })();












// miniQuery Release 0
// var SweetSelector = (function(){

//   this.select = function(htmlElement){
//     console.log(htmlElement)

//     if (htmlElement.includes('#')) {
//         return document.getElementById(htmlElement.substring(1))
//     }
//     else if (htmlElement.includes('.')) {
//       return document.getElementsByClassName(htmlElement.substring(1));
//     }
//     else {
//       return ("can't find that element")
//     }
//   }

//   return {
//     select: select
//   }

// })();

























