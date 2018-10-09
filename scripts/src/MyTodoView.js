define(['ko', 'src/NewTodoItemView', 'src/TodoListView'], function(ko, NewTodoItemView, TodoListView) {
   function MyTodoView() {
      var newTodoItemView = new NewTodoItemView();
      var todoListView = new TodoListView();

      var self = this;

      self.init = function() {
         newTodoItemView.init();
         todoListView.init();
      };
   }

   return MyTodoView;
});
