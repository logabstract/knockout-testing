describe("Given and EventBus instance", function () {
   beforeEach(function() {
      eventBus = new EventBus();
   });

   it("Should call the handler when a newTodoItemInsertedEvent is triggered", function() {
      expect(true).toEqual(true);
   });
})