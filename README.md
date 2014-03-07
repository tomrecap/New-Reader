# Welcome to New Reader

This is an RSS reader, modeled on Google Reader. I built it while learning Backbone.js and CSS.

## Cool Features
* Single-page app.
* Pulls down all subscription data and posts via AJAX.
* Uses Backbone router to enable deep linking to feeds and posts.

## Planned Improvements
* The interface has one or two bugs.
  * Specifically, when you click on a post title in the post list, the post will expand or contract.
  * After a post contracts, you can't click on it right away to re-expand; this only works if you click elsewhere first.
<<<<<<< HEAD
  * I think this has something to do with the way jQuery uses the currentTarget property of the click event to find which post to expand. Possibly the 'class' or 'id' properties of the post title HTML elements may need disambiguated.
=======
  * I think this has something to do with the way jQuery uses the currentTarget property of the click event to find which post to expand. Possibly the 'class' or 'id' properties of the post title HTML elements may need disambiguated.
>>>>>>> google_reader_style
