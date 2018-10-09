define(['ko', 'src/TodoListViewModel'], function(ko, TodoListViewModel) {
   function TodoListView() {
      var self = this;
      var todoListViewModel = new TodoListViewModel();

      self.init = function() {
         ko.applyBindings(todoListViewModel, document.getElementById("todoListView"));
         todoListViewModel.loadTodoList(
            [
               {
                  title: "a passed item",
                  description: "due date is passed",
                  dueDate: new Date(2014, 8, 15)
               }, {
                  title: "an item",
                  description: "something to do",
                  dueDate: new Date(2014, 9, 15)
               }, {
                  title: "another item",
                  description: "something to say",
                  dueDate: new Date(2014, 9, 16)
               }
            ]
         );
      };
   }

   return TodoListView;
});
