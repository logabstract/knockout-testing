define(['postal'], function(postal) {
   var guid,
      newTodoItemInsertedEvent = "EVENT_NEW_TODO_ITEM_INSERTED",
      errorEvent = "EVENT_ERROR";

   guid = function () {
      function s4() {
         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return function () {
         return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
      };
   };
      
   var channel = postal.channel(guid());

   function EventBus() {
      var self = this;

      self.postNewTodoItemInserted = function(todoItem) {
         channel.publish(newTodoItemInsertedEvent, todoItem);
      };

      self.onNewTodoItemInserted = function(handler) {
         channel.subscribe(newTodoItemInsertedEvent, handler);
      };

      self.postError = function(message) {
         channel.subscribe(errorEvent, message);
      };

      self.onError = function(handler) {
         channel.subscribe(errorEvent, handler);
      };
   }

   return EventBus;

});
