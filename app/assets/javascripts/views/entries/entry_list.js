NewReader.Views.EntryList = Backbone.View.extend({
  tagName: 'li class="story-block"',
  template: JST["entries/list"],

  render: function () {
    var content = this.template({ entry: this.model });
    this.$el.attr('data-id', this.model.id)
    this.$el.html(content);
    return this;
  }

});