define(['ko', 'src/EventBus'], function(ko, EventBus) {
   var eventBus = new EventBus();
   function NewTodoItemViewModel() {
      var self = this;

      self.title = ko.observable("");
      self.description = ko.observable("");
      self.dueDate = ko.observable("");

      self.canInsertNewTicket = ko.computed(function() {
         return self.title() && self.description() && self.dueDate();
      });

      self.insertNewTodoItem = function() {
         var newTodoItem = {
            title: self.title(),
            description: self.description(),
            dueDate: new Date(self.dueDate())
         };

         eventBus.postNewTodoItemInserted(newTodoItem);
         self.title("");
         self.description("");
         self.dueDate("");

      };
   }

   return NewTodoItemViewModel;

});
