define(['ko', 'src/TodoItem', 'src/EventBus'], function(ko, TodoItem, EventBus) {
   var eventBus = new EventBus();
   function TodoListViewModel() {
      var self = this;
      self.todoItems = ko.observableArray([]);

      eventBus.onNewTodoItemInserted(function(todoItem) {
         self.todoItems.push(new TodoItem(todoItem));
      });

      self.loadTodoList = function(todoItems) {
         var i;
         self.todoItems.removeAll();
         for(i = 0; i < todoItems.length; i += 1) {
            self.todoItems.push(new TodoItem(todoItems[i]));
         }
      };
   }

   return TodoListViewModel;
});
