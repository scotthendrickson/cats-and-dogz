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
* app.js - Only the home state has been provided. It will be up to you to determine what else is necessary.
* thatDogTemp.html - The html template for the home page has been provided to you.

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

Once you feel VERY comfortable with the existing codebase, move on to Step 2.

### Start to Configure the Router
####

By setting up the router, we are telling our app which options it has in terms of which views we can see based on url, and what contents are related to those views such as our html templates or controllers.
* In your app.js file, create a new state called `'catz'` in your router, so that whenever the user is at the index page `'/catz'`, the templateUrl will be `./templates/catzTemp.html` and the controller will be `'catCtrl'`.
* Now do the same for the `dogz` route, and both individual `catz/:id` and `dogz/:id` routes. Go ahead and use the same controller for the `catz` and `catz:id` routes, annd the same for the `dogz` and `dogz:id` routes.







  - Whenever the user goes to `'/teams/:team'` use `'js/teams/teamTmpl.html'` as the templateUrl and use `'teamCtrl'` as the controller. Name this state `'teams'`.
  - Take note of the /:team that's in the URL. Remember, that makes it so your application is able to keep track of certain states based on which team is located in the URL. For example, when the user visits yoursite.com/teams/utahjazz, in our controller $stateParams.team is going to be equal to 'utahjazz'. This allows us to then pass in the specific team into our getTeamData method that's on our service and get only that teams data. Also note that the menu in our index.html page has links that point to the different teams (which will be caught by :team in our router).
  - Now that our templateUrl and our controller are set up for the /teams/:team url, we want to have some data ready for us before that route loads. In this case, that data we want available in our controller is the specific teams data. Below where we specify the controller, create a resolve block with the key being `resolve:` and the value being an object.
    * The resolve object is going to have a method called `teamData:` which returns the promise that gets returned from `teamService.getTeamData()`. To be able to use the method getTeamData, we need to inject `teamService` into the `teamData:` method by adding it as a parameter. That was really wordy I know. Look up the syntax for how resolve works. What's going to happen is we're going to call the getTeamData method on our teamService service. That will return a promise which will then be resolved and the data we get back from that promise will then be available to us in our controller as teamData, so head over to your teamCtrl.js file and add teamData as a parameter which is passed into your controller.
    * You might have noticed that we're calling the getTeamData method on our teamService service but that method requires a parameter which should be the specific team whose data we want, ie utahjazz, miamiheat, or losangeleslakers. Remember, we know which team's data we want to get based on the `:team` parameter in our route. We get access to that variable in our resolve block by using `$stateParams.team`. So now go ahead and inject `$stateParams` into the `teamData:` method, and pass `$stateParams.team` as the argument in the `teamService.getTeamData()` call.
* Let's make one last change to the router for now. Add a `$urlRouterProvider.otherwise('/');` block so that the router will redirect to the index page if the route the user types in is not recognized.


### Configure the teamCtrl.js File
####

* Head over to your teamCtrl.js file. We should have four things that are being injected into the controller. `$scope`, `$stateParams` (to give us access to `:team` in the url), `teamService`, and `teamData`. `teamData` hasn't been injected for you yet. teamData is from the previous step. It gives us the data that is being returned from `teamService.getData` in our resolve block in the `app.js` file.
* First thing we want to do is get the data (`teamData`) that is being resolved in our app.js file and put that data on the scope. So in your controller, set `teamData` equal to `$scope.teamData`. Now that data is on our scope and can be accessed in the view.
* Now create a property on the `$scope` object called `newGame` and set it equal to an empty object. This is the object that is going to be passed to `teamService.addNewGame` method later on.

* Create another property on the scope object called `showNewGameForm` and set it equal to `false`. Then create a method on our scope object called `toggleNewGameForm` which takes the current value of `$scope.showNewGameForm` and makes it the opposite of what it currently is. We're going to use both of these properties later on in our view to toggle the form to add a new game.

Now is where we want to see which team's value we should get. Remember this is entirely based on the url. If the user is at `/teams/utahjazz` we want to get the jazz's information. But if they're at `/teams/miamiheat` we want to get the Heat's information. Fortunately, we set up the router so that whatever a team is in the URL, that value would be the current value of `$stateParams.team` in our controller.
* Create an `if` statement and check which team the current URL is on (`utahjazz`, `losangeleslakers`, or `miamiheat`). Depending on which team the URL is on, do the following for each team. Set a property on the scope called `homeTeam` that is equal to 'Utah Jazz', 'Los Angeles Lakers', or 'Miami Heat'. Also, (depending on which team), add a property to the scope called `logoPath` that points to the image of the team. For example, if `$stateParams.team` is equal to 'utahjazz', `$scope.homeTeam` is going to equal 'Utah Jazz' and `$scope.logoPath` is going to equal `'images/jazz-logo.png'`.

Now we want to create a method on our scope object that will be called whenever someone submits a new game.
* Create a method on `$scope` called `submitGame`.
* First thing we want to do is take the `homeTeam` property that we set on the scope earlier and strip out the spaces so we can use it as an endpoint in our restAPI. Add a property onto our `newGame` object that is already on the scope called `homeTeam` and set it equal to `$scope.homeTeam.split(' ').join('').toLowerCase()`
* Now we want to call the `addNewGame` method on our `teamService` method. Call `addNewGame` and pass it `$scope.newGame`
* Take a look at the `teamService.js` file and notice what `addNewGame` returns.
* You should have noticed it returns a promise. That means immediately after we call `addNewGame` we can call `.then()`
* Call `.then` and pass it a callback function. this function is then going to call the `getTeamData` service, passing it `$scope.newGame.homeTeam`. We've added a new game to the home team's schedule and now we need to go and get the new data that's in our database.
* You should notice that the `getTeamData` method is also returning a promise. So just like before, call `.then` immediately after you call `getTeamData()` and give it a callback function which accepts parameter (which is going to be the data returned from the `getTeamData` method)
* Now we want to set a few properties on our scope based off the data we got from our promise. First, set `$scope.teamData` equal to the data you got back from the promise. Then, reset `$scope.newGame` to be an empty object, then set `$scope.showNewGameForm` back to `false`.


### Set up for teamTmpl file
####

Now is the fun part. If everything is working correctly, our team controller and team service should be set up and now all we need to do is put that data onto the view. Head over to your teamTmpl.html file and check it out.
* Notice that there are a lot of `$__FIXME__$`. All of those need to be filled in with properties that are on the teamCtrl. This could be really hard or really easy depending on how you tackle the problem. If it were me, I would console.log the $scope object to see all the properties that you're able to use.
* Fill in all the `$__FIXME__$` with the correct models. Once you do that, make sure you have live-server running and head over to localhost:8080/#/teams/utahjazz and see if everything is working as expected. If it is, great. If not, open up your console and start debugging.


### Finish styling and configuring the app.
####

Go back and check out the live example [here](http://www.catzanddogz.nickmarucci.com/).

The purpose of this project is to provide students with practice on Angular Views and certain Angular directives, like ng-model and ng-repeat.

### Black Diamond
####


If you need more practice, try to link up to the PetFinder API to get more animals listed. Use a service and do an $http request for more pets. Add more views and templates if necessary.


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
