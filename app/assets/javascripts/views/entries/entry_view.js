NewReader.Views.EntryView = Backbone.View.extend({

  initialize: function (options) {
    this.parentView = options.parentView
    console.log(options);
  },

  template: JST["entries/view"],
  render: function () {
    var content = this.template({ entry: this.model });
    this.$el.html(content);
    return this;
  }
});