# Game Closure Coding Challenge of David Elfau

## Install instructions
###Requirements:
* Node.js
* npm
* git (optional)


### Steps using git (recomended):
Execute the folling lines on a console:
```
$ git clone https://github.com/david-elfau/game-closure-test-elfau
$ cd game-closure-test-elfau
$ npm install ./
$ npm start
```
### Steps using document attached:
1. Download attached file.
2. Unzip on the desired folder.
3. Open a console and navigate to the unziped folder
4. Execute:
```
$ npm install ./
$ npm start
```
### Test the game
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Technical Details
I have created a front-end app which stores the data in cookies, because I did not feel comfortable creating a server and a client.

Technology used:
* Node.js: It is a quite common and simple environment to work. It helps creating servers and adding packages to the app.
* React: I have selected it as Frontend Library because: TODO 
  * React hooks: To pass and save user state data.
* Bootstrap: I have used because it provides easy way to create components as progress bars, and overlays.
* Adobe XD: I have created the business skeleton on XD and exported to html and CSS to save time. Because I am not an expert in web design.



### Data Management
Data is split in static and user data.
Static includes:
* Info about businesses

User data includes:
* State of the businesses
* Gold balance
* Last time the status has been changed to save in local.

### Balancing details
I have taken as reference for the balancing the AdVenture Capitalist data. 
I took these sources:
* AdVenture Capitalist Wiki: https://adventure-capitalist.fandom.com/wiki/AdVenture_Capitalist_Wiki
* The Math of Idle Games: https://gameanalytics.com/blog/idle-game-mathematics.html 

I change this values:
* I have limited the max levels for business to 200 because I am importing the values through JSON instead of using a formula.
* I have increased the production time in the first businesses to show the progress of the progress bar.

#TODO: MORE DETAILS

## Known issues
List of things I would do better:
* Hook reducer: I know it is a little mess. I would like the way to do it cleaner keeping the data consistency.
* Responsive screen: It add the proper number of business per row. But if the group of rows are not always centered.
* Progress bar: The production progress bar does not reach 100% on the quick productions longer than 1s. I've lock for <1s
* Live version: I would like deploy the game on a server to avoid the instalation steps.

## Attributions
I have used assets from this sources:
* Flat icons: 	https://www.flaticon.com/authors/flat-icons
* PixelMeetup: 	https://www.flaticon.com/authors/pixelmeetup
* Freepik: 		https://www.flaticon.com/authors/freepik
* monkik: 		https://www.flaticon.com/free-icon/fossil-fuel_1996757
