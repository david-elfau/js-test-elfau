# Game Closure Coding Challenge of David Elfau

Demo website:
https://david-elfau-test.web.app/

## Install instructions

### Requirements:
* Node.js
* npm
* git (optional)


### Steps using git (recommended):
Execute the following lines on a console:
```
$ git clone https://github.com/david-elfau/game-closure-test-elfau
$ cd game-closure-test-elfau
$ npm install ./
$ npm start
```
### Steps using document attached:
1. Download attached file.
2. Unzip on the desired folder.
3. Open a console and navigate to the unzipped folder
4. Execute:
```
$ npm install ./
$ npm start
```
### Test the game
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Technical Details
I have created a front-end app which stores the data in cookies. I choose this option because without server I save time in the development iterations and the features required are not affected. It allows me to create a demo how represent better my strengths. 

### Technology used:
* React: I have selected it as Frontend Library because is one the standards of the industry and it fits with I needed. 
  * React hooks: I have used hooks to manage and save the player status.
* Node.js: Simple and flexible environment to work with JS. It includes tools to create projects and prepare build very useful.
* Bootstrap: UI Library that provides me a easy way to create components as progress bars and overlays.
* Firebase: I have used firebase to host the demo, because the deploy system for node + read allowed me quick iterations. 

### Structure
The game has these main parts:
* Store: Manager of the game, it is a hook reducer to listen all the actions of the business and execute.
  * It is a big hook reducer to keep de data consistency in all the game.
  * It saves the data in cookie in every player interaction.
* Business: Manager the interactions and UI of the businesses.
  * It is split in the different components: Upgrade, hire manager and production.
  * In every interaction updates the store.
* DataRecover: When the game is loaded, loads the cookie, initialize the Store and shows the gold earn during the idle
* Gold: It is a panel that updates with the store.



### Data Management
Data is split in static and user data.
Static includes:
* Info about businesses as:
  * Cost per level
  * Revenue per level
  * Production time per level

User data includes:
* State of the businesses
* Gold balance
* Last time the status has been changed to save in local.

Data is split because:
* It allows rebalance without break the player progression.
* Create a lighter user storage.

### Balancing details
I have taken as reference for the balancing the AdVenture Capitalist data. 
I took these sources:
* AdVenture Capitalist Wiki: https://adventure-capitalist.fandom.com/wiki/AdVenture_Capitalist_Wiki
* The Math of Idle Games: https://gameanalytics.com/blog/idle-game-mathematics.html 

I change these values:
* I have limited the max levels for business to 200 because I am importing the values through JSON instead of using a formula.
* I have increased the production time in the first businesses to show the progress of the progress bar.


## Known issues
List of things I would do better:
* Hook reducer: I know it is a little mess. I would like the way to do it cleaner keeping the data consistency.
* Responsive screen: It add the proper number of business per row. But if the group of rows are not always centered.
* Progress bar: The production progress bar does not reach 100% on the quick productions longer than 1s. I've lock for <1s

## Attributions
I have used assets from this sources:
* Flat icons: 	https://www.flaticon.com/authors/flat-icons
* PixelMeetup: 	https://www.flaticon.com/authors/pixelmeetup
* Freepik: 		https://www.flaticon.com/authors/freepik
* monkik: 		https://www.flaticon.com/free-icon/fossil-fuel_1996757
