## Catz And Dogz

### Introduction

####
##### Objective
Create an Angular application that uses routes to navigate through a list of Cats and Dogs.

Raining Catz and Dogz is the first exposure you'll get to building a full fledged app with more than just one 'route'. Take a look at the full working version of the app [here](http://www.catzanddogz.nickmarucci.com/).

##### About
Notice that the app starts at the home page, and is linked to both of the cats and dogs pages using ui-router. Also, notice that within each of the cats and dogs pages, you are able to access the individual cats and dogs on new state views.

In this repo, you'll continue to practice fundamental Angular principles you've learned like controllers, services, and Angular directives.

### Setup
####

For this project you're going to need to serve your files through a live-server
* Fork and clone this repository [here](https://github.com/DevMountain/catz-and-dogz)
* Open up your terminal and run
  `npm install -g live-server`
* When you are ready, cd into your folder and run
  `live-server`
  The line after should print out: `Starting ... at http://127.0.0.1:8080`
* Go to http://localhost:8080 in your browser. You should see the initial state of your application.

**Note** If your text editor supports its own live-server package, install the package and run live-server directly from your editor.


### Review the Existing Repo Code
####

Take a look at the file structure and files that have been provided to you for this project.

A few things have been included for you
* images
* services - We have provided all of the necessary cat and dog data for you.
* index.html - The structure of the page and CDN's have been provided.
* style.css
* app.js - Only the home state has been provided. It will be up to you to determine what else is necessary. Also, note that the $urlRouterProvider has already been configured to go to the homepage as a default.
* homeTemp.html - The html template for the home page has been provided to you.

####

Take a look at how the routes are broken into folders. This is a very easy way to keep things modular!
* 'services/' folder -- stores all of our associated service.js files
* 'templates/' folder -- stores all of our associated view.html files.

Take a look at the index.html page.
* `rainingCatzAndDogz` is included as the name of our app.
* A navigation menu has been created that's going to be at the top of the page for every route - Also, notice that they don't do anything yet. They aren't linked to any views.
* The ui-router script tag is separate from Angular. It doesn't come built in with Angular
* &lt;ui-view></ui-view&gt; is included and inside of our index.html

####

The &lt;ui-view></ui-view&gt; element and it's placement is crucial to understanding how routing works. The router is going to take that element and inject certain templates (html pages) into it depending on which route we're using. The template that is injected into the &lt;ui-view></ui-view&gt; element depends entirely on what we specify in using the `$stateProvider` object in our app.js file. Creating a router this way allows us to dynamically switch templates and controllers based on the URL.

Once you feel VERY comfortable with the existing codebase, move on to the next step.

### Configure the Router
####

In this step, we need to set up four more state views in our app.js.

####

Go ahead and add the following state views.

* `/catz` - For all cats
* `/dogz` - For all dogs
* `/catz/:id` - For individual cats by id
* `/dogz/:id` - For individual dogs by id

####

By setting up the router, we are telling our app which options it has in terms of which views we can see based on url, and what contents are related to those views such as our html templates or controllers.

In your app.js file, create a new state called `'catz'` in your router, so that whenever the user is at the index page `'/catz'`, the templateUrl will be `./templates/catzTemp.html` and the controller will be `'catCtrl'`.

Now do the same for the `dogz` route, and both individual `catz/:catId` and `dogz/:dogId` routes. Go ahead and use the same controller for the `catz` and `catz:catId` routes, and the same for the `dogz` and `dogz:dogId` routes.

* Take note of the /:catId and /:dogId that's in the URL for the individual cats and dogs. Remember, that makes it so your application is able to keep track of certain states based on which animal is located in the URL. For example, when the user visits yourSiteDomain.com/dogz/Bulldog, in our controller $stateParams.dogId is going to be equal to 'Bulldog'. This allows us to display just the Bulldog data when we pass through our dog data in the dog service file.

####

When you are done, your code should look something like this. Make sure you create controllers for both of the cats and dogs. Be sure to organize them in a controllers folder and link them in a script tag at the bottom of your html file.

```
$stateProvider
.state('home',{
  url:'/',
  templateUrl: "./templates/homeTemp.html"
})
.state('catz',{
  url:'/catz',
  controller: 'catCtrl',
  templateUrl: "./templates/catzTemp.html"
})
.state('dogz',{
  url:'/dogz',
  controller: 'dogCtrl',
  templateUrl: "./templates/dogzTemp.html"
})
.state('catbyid',{
  url:'/catz/:catId',
  controller: 'catCtrl',
  templateUrl: "./templates/thatCatTemp.html"
})
.state('dogbyid',{
  url:'/dogz/:dogId',
  controller: 'dogCtrl',
  templateUrl: "./templates/thatDogTemp.html"
});

$urlRouterProvider
.otherwise('/');
```

### Setup the templates
####

Now that our templates and controllers have been injected into each of the states, we should make them. Let's start by creating the templates for each state.

####

Create four new files, which are listed below, and place them in the templates folder.

* catzTemp.html
* dogzTemp.html
* thatCatTemp.html
* thatDogTemp.html

####

For the catzTemp.html and dogzTemp.html files, setup some html structure to display a title specifying the page we are on and a place to put an image of each animal. Since we don't have any data yet, feel free to use a space filler for now.

For the thatCatTemp.html and thatDogTemp.html files, setup your html structure similarly but display the individual animal content, such as breed, image, activity, affection, and the description. And also, feel free to use filler content for this step.

Go ahead to your browser and test your content. Now that we have created templates that are linked to the state config, we should be able to see them appear when the url has an appropriate extension. For example use the following url extension to test the dogz page : http://localhost:8080/#/dogz.

If everything works correctly, go through the index.html file and the template files, and add any ui-sref attributes that would be necessary to connect to the different views.

### Setup the cat and dog controllers
####

Next, go ahead and create a controller both for the cats and for the dogs.

####

Create two new files, which are listed below, and place them in the controllers folder.

* catCtrl.js
* dogCtrl.js

####

Make sure that $scope and catServ or dogServ are injected into each of the controllers. And before we get started, let's make sure that the controllers have been added to your index.html in a script source tag.

Create a test variable in your controller called $scope.test and give it some value. In the associated template file that you created in the last step, put {{test}} somewhere in the file. Make sure that the value that you gave to $scope.test pops up on the view.

####

In this case, we want to gain access to the cats and dogs data that are present in our service files by calling to the service through our controller.

Go ahead and delete the test variables you made and create new $scope variables that are accessible in the html view and associate them with the data that was pulled from the service files.

In your templates, go ahead and replace your filler data with two way binding variables that will display the information that is needed. Also, for the catz and dogz views, create an ng-repeat to repeat over all of the values in the allCats and allDogs arrays. Make sure you include the appropriate ui-sref's to link into the specific animals. For example, use the following format to link to the specific cat view by breed.

`ui-sref="catbyid({catId: cat.breed})`

If everything tests correctly, you should see all of the cats and dogs show up in the `/catz` state and `/dogz` state. Also, when you select an individual animal, it should take you to the individual cat or dog page.

* Note: The information on the individual cat and dog pages will not display until we configure the data to the specific state by breed.

### Finish the cat and dog controllers to display individual animal information

####

Now that we can see all of the data in the catz and dogz views, we need to setup our controller to manipulate the allDogs and allCats arrays to only show the data for the individual animals, when selected.

####

Let's start by injecting $state into both of our controllers. We will also need to create a scope variable for the individual animal that has been selected. Go ahead and define a new variable, $scope.Cat and $scope.Dog, by giving it an empty string value and placing it at the top of your controllers.

Now, we need to do some data manipulation using JavaScript. In the cat controller, take your allCats array and loop through each cat object using a for loop. Check to see if the cat breed value is equal to the $state.params.catId value. If it is, then set the $scope.Cat value to the entire cat object.

In the thatCatTemp template, replace your filler data with the two way binded values from $scope.Cat. For example, display your cat breed by using `{{Cat.breed}}`. Check to make sure everything works, and then repeat this process in the dog controller and thatDogTemp template.

### Finish styling and configuring the app.

####

Go back and check out the live example [here](http://www.catzanddogz.nickmarucci.com/).

Fix any styling or any routing connections that may need improved. Feel free to style the page differently or add features for practice.

### Black Diamond
####

If you need more practice, try to link up to the PetFinder API to get more animals listed. Use a service and do an $http request for more pets. Add more views and templates if necessary.

If you would like more ui-router practice, replicate or improve a live website by creating the views listed in the nav bar.

## Resources

### Resources

####
* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts


## Contributions

### Contributions

####

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

####

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
