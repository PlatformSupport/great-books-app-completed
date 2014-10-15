(function () {
    var app;

    // create an object to store the models for each view
    window.Books = {
      
    };

    document.addEventListener('deviceready', function () {  
      navigator.splashscreen.hide();
      app = new kendo.mobile.Application(document.body);

    }, false);

    window.app = app;
}());