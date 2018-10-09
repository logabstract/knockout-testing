
requirejs.config({
   paths: {
      jquery: 'libs/jquery-1.11.1.min',
      jqueryui: 'libs/jquery-ui-1.10.4.custom.min',
      ko: 'libs/knockout-3.1.0.min',
      bootstrap: 'libs/bootstrap.min',
      domReady: 'libs/domReady',
      postal: 'libs/postal-0.10.0.min',
      lodash: 'libs/lodash-2.4.1.min',
      conduitjs: 'libs/conduit-0.3.2.min'
   },
   shim: {
      ko: {
         deps:["jquery"],
         exports: "ko"
      },
      jqueryui: {
         deps: ["jquery"],
         //This is because jQueryUI plugin exports many things, we would just 
         //have reference to main jQuery object. RequireJS will make sure to
         //have loaded jqueryui script.
         exports: "jQuery" 
      }
   }
});

require(['src/MyTodoView', 'domReady!'], function(MyTodoView) {
   var myTodoView = new MyTodoView();
   myTodoView.init();
});
