(function () {
    var app;

    // create an object to store the models for each view
    window.Books = {
      data: new kendo.data.DataSource({
        transport: {
          read: {
              url: "data/books.js",
              type: "get",
              dataType: "json"
          }
        },
        schema: {
            data: "books"
        }
      })
    };

    document.addEventListener('deviceready', function () {  
      navigator.splashscreen.hide();
      
      app = new kendo.mobile.Application(document.body, { skin: "flat" });
    }, false);

    window.app = app;
}());