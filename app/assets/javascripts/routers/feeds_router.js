NewReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    ":feedId/entries" : "feedView",
    ":feedId/entries/:entryId" : "entryView"
  },

  initialize: function (sidebar, mainPane) {
    this.sidebar = sidebar;
    this.element = mainPane;
    this.insertSidebar();
  },

  feedsIndex: function () {},

  insertSidebar: function () {
    var view = new NewReader.Views.FeedsSidebar();
    this.sidebar.html(view.render().$el);
  },

  feedView: function (feedId) {
    var feed = NewReader.feeds.get(feedId);
    var view = new NewReader.Views.FeedView({ model: feed });
    this._swapView(view, this.element);
  },

  entryView: function (feedId, entryId) {
    var feed = NewReader.feeds.get(feedId);
    var entry = feed.get("entries").get(entryId);
    var view = new NewReader.Views.EntryView({ model: entry });
    var targetContainer = $('[data-id="' + entryId + '"]');
    targetContainer.html(view.render().$el);
  },

  _swapView: function(newView, target) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    target.html(newView.render().$el);
  }

});
