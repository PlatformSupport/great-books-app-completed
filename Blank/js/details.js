(function () {
    window.BookDetail = {
      show: function() {
        var location = window.location.toString();
        var isbn = location.substring(location.lastIndexOf('?')+4);
        
        window.Books.data.filter({ field: "isbn", operator: "eq", value: isbn });
        
        var model = window.Books.data.view()[0];
        var book = {
          title: model.name + " by " + model.author,
          image_url: model.image_url,
          amazon_url: model.amazon_url,
          is_favorite: model.is_favorite
        };
        
        kendo.bind($('#bookContent'), book, kendo.mobile.ui);
        if (book.is_favorite) {
          $('#favorite').data('kendoMobileSwitch').toggle();
        }
      },
      hide: function() {
        window.Books.data.filter([]);
      },
      openLink : function() {
        window.open(window.Books.data.view()[0].amazon_url, '_blank', 'location=yes');
      }
    };
}());