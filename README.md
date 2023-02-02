# _Catnip!_

_Catnip_ is a browser extension that improves the web experience by showing you more cats. The extension adds a button to your browser, which replaces images on a page with pictures of cats when clicked.

This is my first browser extension, and it was a lot of fun to build.


Wikipedia Homepage  |  Wikipedia Homepage on Catnip
:-------------------------:|:-------------------------:
<img src="https://raw.githubusercontent.com/tal-z/catnip/main/readme_pics/wikipedia.PNG" alt="Wikipedia Homepage"> | <img src="https://raw.githubusercontent.com/tal-z/catnip/main/readme_pics/wikipedia_on_catnip.PNG" alt="Wikipedia Homepage">

## About this Project:

### `manifest.json`
The `manifest.json` file is responsible for telling the browser about the extension's configuration. It is responsible for identifying background scripts, content scripts, UI elements and other resources which power one's extension. It also defines metadata about the extension, including name, version, description, etc.

### Background Scripts vs. Content Scripts
Background scripts are scripts that run...wait for it..._in the background_. In practice, this means that they don't run in a browser tab. They run via their own _service worker_, and can be inspected in a separate console accessible via the `about:debugging` page.

In contrast, content scripts are scripts that do run in a browser tab. They may be run in a page that the user has loaded remotely (not from the extension itself), or may be run in a page that was packaged with the extension. In general, content scripts are _injected_ into existing web pages. Please note that no cats are harmed when injecting catnip.

### Browser Actions
Browser actions refer to events that you'd like to be able to trigger anywhere throughout the browser. Typically, browser actions are controlled with a button, as is the case with _Catnip_

### User Onboarding


### Development

#### git
##### Branches
 - main (protected branch, can only be updated via PR)
 - develop (branch for testing features/changes before merging with main)
 - feature branches (for all other work, to be tested on develop before merging into main with a PR.)

##### Flow
1. Create a new feature branch for new work with upstream tracking.
```
git checkout -b <new-branch-name>
do some work...
git commit
git push --set-upstream origin <new-branch-name>
```

2. When ready, merge feature to develop locally, and push to remote.
```
git checkout develop
git pull
git merge <feature-branch-name>
git push
```

3. When ready, create a PR on develop and pull into main. Do this part in GitHub.

#### `web-ext`

`web-ext run` loads a browser that auto-reloads the extension

`web-ext build --overwrite-dest` packages the extension

`web-ext sign` Submit extension to be signed for self-hosting (requires API creds)