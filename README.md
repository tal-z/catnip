# Catnip!

_Catnip_ is a browser extension that improves the web experience by showing you more cats. The extension adds a button to your browser, which replaces images on a page with pictures of cats when clicked.

This is my first browser extension, and it was a lot of fun to build.

###### Wikipedia Homepage:
![Wikipedia Homepage](https://github.com/tal-z/catnip/blob/master/readme_pics/wikipedia.PNG?raw=true)
###### Wikipedia Homepage on Catnip:
![Wikipedia Homepage on Catnip](https://github.com/tal-z/catnip/blob/master/readme_pics/wikipedia_on_catnip.PNG?raw=true)

## About this Project:

### `manifest.json`
The `manifest.json` file is responsible for telling the browser about the extension's configuration. It is responsible for identifying background scripts, content scripts, UI elements and other resources which power one's extension. It also defines metadata about the extension, including name, version, description, etc.

### Background Scripts vs. Content Scripts
Background scripts are scripts that run...wait for it..._in the background_. In practice, this means that they don't run in a browser tab. They run via their own _service worker_, and can be inspected in a separate console accessible via the `about:debugging` page.

In contrast, content scripts are scripts that do run in a browser tab. They may be run in a page that the user has loaded remotely (not from the extension itself), or may be run in a page that was packaged with the extension. In general, content scripts are _injected_ into existing web pages. Please note that no cats are harmed when injecting catnip.

### Browser Actions

### User Onboarding

### 