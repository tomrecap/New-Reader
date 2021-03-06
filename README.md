##Welcome to [New Reader](http://new-reader.herokuapp.com)

This is an RSS reader, modeled on Google Reader. I built it while learning Backbone.js and CSS.

(The Backbone code is in `/app/assets/javascripts`.)

### Cool Features
* Single-page app.
* Pulls down all subscription data and posts via AJAX requests.
* RESTful API built in Rails to serve data.
* Uses Backbone router to enable deep linking to feeds and posts.

### Planned Improvements
* The interface has one or two bugs.
  * Specifically, when you click on a post title in the post list, the post will expand or contract.
  * After a post contracts, you can't click on it right away to re-expand; this only works if you click elsewhere first.
  * I think this has something to do with the way jQuery uses the currentTarget property of the click event to find which post to expand. Possibly the 'class' or 'id' properties of the post title HTML elements may need disambiguated.

I built this while pair-programming with [Mitchell Smith](https://github.com/smitchsmith).
