define(['jqueryui', 'ko', 'src/NewTodoItemViewModel'], function($, ko, NewTodoItemViewModel) {
   function NewTodoItemView() {
      var self = this;
      var newTodoItemViewModel = new NewTodoItemViewModel();

      self.init = function() {
         $("#todoItemDueDate").datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: 1
         });

         ko.applyBindings(newTodoItemViewModel, document.getElementById("newItemView"));
      };
   }

   return NewTodoItemView;
});
