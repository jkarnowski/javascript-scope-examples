var createTodoList = function() {
  var todoList = {};

  // your code here
  // returns an object with todo list functionality
  todoList.items = [];

  // push an item object into the items array of THIS object
  todoList.add = function(item) {
  	this.items.push({
  		description: item,
  		completed: false
  	})
  }

  todoList.list = function(){
  	return this.items;
  }

  todoList.indexOf = function(item){
  	return this.items.indexOf(item);
  }

  todoList.remove = function(index){
  	this.items.splice(index, 1);
  }

  todoList.get = function(index){
  	return this.items.data;
  }

  todoList.complete = function(index){
  	// this.items.data.completed = true;
  	for (var i in this.items){
  		if (this.items.indexOf(index) === index){
  			this.items.data.completed = true;
  			break; //stops the loop
  		}
  	}
  }

  return todoList;
};


// Driver code


// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.indexOf('cheese'); //-> 1
groceryList.remove(1);
groceryList.list(); //-> ['bread', 'milk']

// release 2
var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> [
// {description: 'bread', completed: false}, 
// {description: 'cheese', completed: false}, 
// {description: 'milk', completed: false}, 
// ];
groceryList.indexOf('cheese'); //-> 1
groceryList.get(1); //-> {description: 'cheese', completed: false}
groceryList.complete(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false}, 
// {description: 'cheese', completed: true}, 
// {description: 'milk', completed: false}, 
// ];
groceryList.remove(1);
groceryList.list(); //-> [
// {description: 'bread', completed: false}, 
// {description: 'milk', completed: false}, 
// ];
