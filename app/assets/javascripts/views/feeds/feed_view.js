NewReader.Views.FeedView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(
      this.model.get("entries"),
      "add",
      this.render
    );
  },

  tagName: 'ul',
  // this.$el = $("<ul></ul>");
  template: JST["feeds/view"],
  render: function() {
    var content = this.template({ feed: this.model });
    this.$el.prepend(content);

    var that = this;

    var entries = this.model.get("entries");
    entries.comparator = "published_at"

    entries.each(function (entry) {
      that.renderEntryListView(entry);
    });
    return this;
  },

  renderEntryListView: function (entry) {
    var view = new NewReader.Views.EntryList({ model: entry });
    this.$el.append(view.render().$el);
  },

  events: {
    "click #refresh-feed": "refreshList",
    "click .entry-title": "reRenderThePage"
  },

  refreshList: function (event) {
    event.preventDefault();
    var that = this;
    this.model.get("entries").fetch();
  },

  reRenderThePage: function (event) {
    event.preventDefault();
    console.log(event);

    var target = $(event.currentTarget).closest("li")
    var entryId = target.attr("data-id");
    var entry = this.model.get("entries").get(entryId);
    var view = new NewReader.Views.EntryList({ model: entry });

    console.log(entry);
    target.empty();
    target.html(view.render().$el.html())
  }

});