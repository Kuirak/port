# Porting GUN

Please see the [docs](http://gun.js.org/docs/Porting-GUN) and watch the 30min NordicJS tech talk first.

> Note: This folder is currently missing a package.json , if you want to run the NodeJS samples you'll need to install `ws` and likely a few other packages. 

Implementation order, follow along with the video:

1. Port `/com` into your language of choice, test that it is working against the browser.
2. Then port the changes in `/ad-hoc` into your system, including the deduplication code, test against the browser.
3. Then port the changes in `/graph`, test against browser, etc.
4. Port `/resolution`, including the CRDT conflict resolution algorithm, etc., test multiple times against browser, etc.
5. Port `/key`, etc. its in-memory lookup, etc. test against browser.

Now you're done! You have an in-memory, websocket+JSON port of GUN in your language! Any existing GUN app should be able to point to your peer and things will work, except for long term storage.

If you decide to port `/storage` please note two things:

1. Use the latest Radix Storage Engine code from GUN's main repo.
2. It is still currently work-in-progress and thus maintain bugs.

Feel free to watch the NordicJS follow-up talk on doing distributed load testing against your server. Note that `/test` contains a duplicate of the code, you can ignore these duplicates.

Any questions? Hit me up on https://gitter.im/amark/gun !