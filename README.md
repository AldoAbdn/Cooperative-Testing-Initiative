# Cooperative-Testing-Initiative
Escape room runner react app for an escape room I created as part of my honours project

Portal 2 Themed room for 2 players were the players must solve puzzles to save science

Resources to play the room can be found [here](https://drive.google.com/drive/folders/1ndn_u1jLYnXv7zA7NC1xXhEFRU2_yzoZ?usp=sharing)

**However**

You will also require a mirror (preferably one that can be held) and a QR code reader. Cut out the blue portal and stick it on the mirror or make your own blue portal cutout

The pigpen cipher is contained within the Escape Room Generator folder pdf but feel free to print out your own

## Disclaimer
I **do not** own the rights to portal, which are held by it's creator Valve. Images used in the design were sourced via google image search with the labeled for reuse feature on. Any of the characters or sound effects contained in the design are property of Value. None of this material has been used for commercial purposes. 

The song used in the background is sourced from the official Portal 2 Website [page](http://www.thinkwithportals.com/music.php) 

The image used in the poster contained in the materials can be found [here](https://www.deviantart.com/vaiisk/art/Cooperative-Testing-Initiative-208688637) created by DeviantArt user [Valisk](https://www.deviantart.com/vaiisk)

I do not own the image or the music, this software was and can only be used for non-commercial purposes. In this case it was used to test that an application i had created to generate an escape room could actually create a solveable room. 

## Starting the App
Once you download the app, type npm install. Once complete type npm start and the app will be hosted on localhost:3000 (should open automatically)

## Changing Scene 
There are 5 scenes within the app
- splashcreen (0)
- intro video (1)
- coundown timer (2)
- outro video (3)
- after credits song (4)

SHIFT + [scene number] will switch the scene

## Starting the Timer
SHIFT + 2 will navigate to the countdown timer scene. SHIFT + SPACE will play/pause the timer

## Voice Lines
In the countdown timer scene only, CTRL + SHIFT + [1,2,3 or 4] will play a wheatly voiceline use these to get the players attention

## Hint System
There is a text box you can type hints into on the coundown page

## Displaying the App
I used a chromecast connected to a tv, and casted a tab on my laptop to the tv containing the hosted app in fullscreen. The same thing could be accomplished with a direct connection to a tv/monitor

You will also require to have node/npm installed on your machine to run this app locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
