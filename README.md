# Telnyx Angular Test
# [DEMO](https://telnyx.herokuapp.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5 to quickly get up and running. The webpack config was then ejected to remove the dependency on the Angular CLI.

An json-server was added to host the static api server (json file with data)

* use of new rxjs 5.5 lettable operators
* lazy loading routes for less initial data transfer to user
* implement custom loading strategy for preloading most used modules
* separate routes into separate modules for better code readability
* shared folder for navigation bar, models and more
* applied Angular style guide for documented best practises like using modules, create separate folder for component html, scss, typescript, keeping ngOnInit very clean, try using async pipe as it auto subscribes and unsubscribe from the observable when the component gets destroyed, prefix all component selectors with "app" and more. I'm not a big fan of them because of the lack of error handling so I'll mix it up and use both.
* use of new HTTP Client to strongly type data responses (with models).
* use of webpack config to remove the dependency from the Angular CLI
* Use Angular 5
* All Title service to change browser tab text for each page
* Using route params maps rather than snapshots so that url can be changed and UI can be updated dynamically.
* I decided to keep the individual post component in the feed module and not in its own module because the chance is very likely that if they are on the feed page they will at least op one post so loading all of it at the same time makes sense.
* I decided to use the forms module in some places and in some not.
    * Create comment page:
        * Will likely be used a lot and loads the create component with the comment which means bringing in the forms module for every request (even if it will be cached) I don't think it necessary especially because it only one text field and validation can be done manually. Thus I just used template variables and reference the value of the input with the create button.
    * Create post page: 
        * This page however has multiple input and more validation will be needed.
        * Can still be done with template variable but I thought I'd use the chance to show reactive forms. 
* I saw that the post content was HTML so I added an WYSIWYG editor to stay consistent
* I went with the traditional blog layout as that is what people understand and won't confuse the user. That said it should have to be unique, new and stand out. 
* In the create comment component I show some component two-way binding (banana in a box)
* Web share API for native mobile share experience
* Angular Material (CDK) Component Dev Kit for custom overlay for emoji picker
* Sort by feature