Plug and Play Forms
===================

A variety of forms that should be more or less plug and play. They are styled with modified [Bootstrap](http://twitter.github.com/bootstrap/), written with [Sass](http://sass-lang.com/) and [Bourbon](http://thoughtbot.com/bourbon/), and use [jQuery Form Validation](http://bassistance.de/jquery-plugins/jquery-plugin-validation/). This is a work in progress, so please be gentle. Do feel free to point out mistakes or to create pull requests.

View demo: [http://freshtilledsoil.github.com/plug-and-play-forms/](http://freshtilledsoil.github.com/plug-and-play-forms/)

Technologies
------------

* Select [Bootstrap](https://github.com/twitter/bootstrap) styles are included, in a heavily modified form, to provide suitable defaults. Moving of styles from forms.scss to styles.scss so that everything is in one place is a work in progress.

* [Sass](http://sass-lang.com/) is included to make CSS development faster. Don't like Sass? Sorry, I do. But I do compile my Sass to stylesheets/application.css every time I commit, so you can work from that if you want to.

* [Bourbon](https://github.com/thoughtbot/bourbon) is included to make CSS3 use faster. This is used in place of Bootstrap's CSS3 mixins.

* [jQuery.validate.js](https://github.com/jzaefferer/jquery-validation) is currently included to quickly provide inline client-side form validation. Eventually, I plan to remove this in favor of lighter custom validation written for each form.

TODOs
----

* Write lighter custom validation
* Add more form types (suggestions welcome)
* Add AJAX form submission
* Add sample PHP files for directing form output
* Modify error class(es) to position without additional styling

Contributing
------------

Pull requests are welcome, but as this project is young and much of it is still in flux, rejections may seem arbitrary. I will continue to solidify its purpose as fast as possible to make contribution guidelines clearer. Rest assured, I have a clear goal in mind and will do my best to continue to clarify it.

Principal Author
----------------

This project was started and will be maintained by [Steve Hickey](https://twitter.com/stevehickeydsgn), UI Designer and Front-End Developer at [Fresh Tilled Soil](http://www.freshtilledsoil.com/).
