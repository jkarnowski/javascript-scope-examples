// // function assigned to a variable
  // myList is an object literal with properties that point to a function
  // what allows you to get access to the properties(add, listAllItems, etc?
  // what happens if you do not return myList?

var makeTodoList = function(){
  var myList = {
    list: [],
    add: function(item){
      this.list.push({description: item, completed: false})
    },
    listAllItems: function(){
      return this.list;
    },
    indexOf: function(item){
      return this.list.indexOf(item)
    },
    getItem: function(index) {
      return this.list.data
    }
  };
  return myList;
};

// // create a new object w prototyping for each function
  // prototyping: the object inherits the behaviors through prototyping
  // allows you to keep the object light and skinny but add complexity when the object
  // needs to use its superpowers (aka: functions)

// var TodoList = function(){
//   this.list = [];
// }

// TodoList.prototype.addItem = function(item) {
//   this.list.push(item);
// };

// TodoList.prototype.printList = function() {
//   console.log(this.list);
// };

// TodoList.prototype.indexOfItem = function(item) {
//   console.log(this.list.indexOf(item));
// };
