window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var sidebar = $('#sidebar')
    var content = $('#main-pane');

    NewReader.feeds = new NewReader.Collections.Feeds();
    NewReader.feeds.fetch({
      success: function () {
        new NewReader.Routers.Feeds(sidebar, content);
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
