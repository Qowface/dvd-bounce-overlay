# DVD Bounce Overlay

Basic [Phaser](https://phaser.io/) project intended to be used as an [OBS](https://obsproject.com/) overlay that bounces an image around the screen, like the logo on a DVD player screensaver.

## Usage:
* Upload this project, as well as any images you want to use, to your web hosting (or serve it from a local web server).
    * If you have node/npm installed, you can use [http-server](https://www.npmjs.com/package/http-server) to serve this locally.
* Copy the following URL (adjusting the path for wherever you are hosting it) and paste it somewhere:
```
http://localhost:8080/?width=1920&height=1080&speed=0.2&imagePath=placeholder.png
```
* Modify the URL parameters as needed:
    * **width** - Browser source width (default: 1920)
    * **height** - Browser source height (default: 1080)
    * **speed** - Image movement speed (default: 0.2)
    * **imagePath** - Path to image (default: placeholder.png)
* In OBS, add a new Browser source.
    * Paste the URL from the previous step.
    * Set the width and height to match the width and height you specified in your URL.
    * Keep the custom CSS that OBS adds by default.
    * Optionally, check the option to "Shutdown source when not visible" to save resources when the overlay is not visible.
