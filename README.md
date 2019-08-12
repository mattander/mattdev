# Pathfinder Healthcare Navigation Wordpress Build

This site was made for my mother's new business in healthcare advocacy.
```javascript
gulp serve
```
Starts a dev server with live reload.
```javascript
gulp build
```
Runs the build process (building into the wp-content folder).

I chose to focus on simplicity and accessibility. I also had to work with the artist hired for the branding to be sure we created a site that is unique while still usable on all devices and by users with all levels of ability.

I used Bootstrap 4 to help stand this up quickly, and then added custom styles for components that I needed.

I'm also using a gulp file that I made last year to help with the build side of the files. In this instance, I'm using it to build and prefix scss into css, compile my JS files and import any node modules referenced, uglify the js files and polyfill anywhere it's needed using babel. Files are worked on in src.

In terms of plugins, the main one used is Advanced Custom Fields Pro to help me make the authoring role more user friendly on the back end, while being flexible on the front end.

You can visit the site at www.pathfinderhealthnav.ca.

The only thing that I haven't added yet is the testimonial section, which is waiting for the business to really get up and running.
