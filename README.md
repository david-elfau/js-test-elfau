# Intro

## Install instructions

Repostiory link: https://github.com/david-elfau/game-closure-test-elfau


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Technical Details
I've created a front end app which stores the data in cookies, because I didn't feel confortable

Technology used:
* Node.js: It is a very common and simple enviroment to work. It helps creating servers and adding packages to the app.
* React:I have select it as Frontend Library because: TODO
  * React hooks: To pass and save user state data.		
* Bootstrap: I have used because it provide easy way to create components as progress bars, and overlays.
* Adobe XD: I have create the business skeleton on XD and exported to html and css to save time. Because I am not an expert in web design.



### Data Management
Data is split in static and user data.
Static includes:
* Info about businesses
*
*
User data includes:
* State of the businesses
* Gold balance
* Last time the status has been change to save in local.

### Balancing details
I have taken as reference for the balancing the AdVenture Capitalist data. 
I took this sources:
* AdVenture Capitalist Wiki: https://adventure-capitalist.fandom.com/wiki/AdVenture_Capitalist_Wiki
* The Math of Idle Games: https://gameanalytics.com/blog/idle-game-mathematics.html 

I change this values:
* I have limited the max levels for business to 200 because I am importing the values througt JSON instead of show using a formula
* I have increase the production time in the first businesses to show the progress of the progress bar

#TODO: MORE DETAILS

## Known issues
List of things I would do better:
* Hook reducer: I know it is a little mess. I would like the way to do it cleaner keeping the data consistency.
* Responsive screen: It add the propper number of bussiness per row. But if the group of rows aren't allways centered.
* Progress bar: The production progress bar doesn't reach 100% on the quick productions longer than 1s. I've lock for <1s




## Atributions
I have used assets from this sources:
* Flat icons: 	https://www.flaticon.com/authors/flat-icons
* PixelMeetup: 	https://www.flaticon.com/authors/pixelmeetup
* Freepik: 		https://www.flaticon.com/authors/freepik
* monkik: 		https://www.flaticon.com/free-icon/fossil-fuel_1996757