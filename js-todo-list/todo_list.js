var createTodoList = function() {

  var todoList = {
    myList: [],
    add: function(item){
      this.myList.push({description: item, completed: false});
    },
    list: function(){
      for(i in this.myList){
        console.log("description:", this.myList[i].description, "completed", this.myList[i].completed);
      }
    },
    findIndex: function(item){
      for(var i=0; i<=this.myList.length; i++){
        if (item == this.myList[i]){
          return i
        }
      }
    },
    get: function(index){
      return this.myList[index];
    },
    remove: function(index){
      return this.myList.splice(index, 1)[0]
    },
    complete: function(index){
      this.myList[index].completed = true;
      return this.myList[index]
    }
  };

  return todoList;
};


// Driver code


// Release 1

var groceryList = createTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.list(); //-> ['bread', 'cheese', 'milk']
groceryList.findIndex('cheese'); //-> 1
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
groceryList.findIndex('cheese'); //-> 1
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
