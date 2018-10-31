define(['src/NewTodoItemView', 'src/TodoListView'], function(NewTodoItemView, TodoListView) {
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
