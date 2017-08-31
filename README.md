# Testing with Chrome Headless
This is a PoC for end to end test run with [nightwatch.js](http://nightwatchjs.org/),
Selenium and Google Chrome Headless.

## Run

Use `docker-compose` to run all tests from the `tests/` folder. The container
will exit afterwards.

![Test run](./screenshot.png?raw=true)

## Caveats

- If you produce an SSL error (e.g. server misconfiguration), Chrome will
    hang for about a minute and fail afterwards
- If you try to enable remote debugging, Selenium won't start
