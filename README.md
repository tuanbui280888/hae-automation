# hae-automation
This repository is used for executing automation test

## Setup
```
$ mkdir auto-test
$ cd auto-test
$ git clone https://github.com/tuanbui280888/hae-automation.git
$ cd hae-automation
$ npm install
$ npm test
```

## About
- Language: Javascript
- Automation Framework: Based from WebdriverIO & Mocha
- Assertion: Chai library

## Framework Details
### General Structure
- src
 - common: folder contains common funcions/ultilities that can used in all project
 - mobile-app: folder contains all projects related to mobile-app
 - web-app: folder contains all projects related to mobile-app
- reports: folder contains the report of every test execution, group by project>date
- wdio.conf.js: Config file WebdriverIO to execute the test

### Project Structure
- <project name>
  - data: folder contains test data of project (csv, json, png...)
  - objects: folder contains test objects and functions of it (eg. Login page with function login(username,password)
  - pages: folder contains webpages of projects and the elements of the page
  - test: folder contains test scrips
  config.json : This file contains the config data of project that can update manually for test purpose (eg. domain, username, password...)
