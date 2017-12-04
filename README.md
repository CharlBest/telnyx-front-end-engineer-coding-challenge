# Telnyx Angular Test
# [DEMO](https://telnyx.charlbest.com/)

### Requirements

* [Node.js](https://nodejs.org/en/) v6 or higher

### Quick start

#### 1. Run `npm install`

This will install all dependencies (listed in `package.json`) necessary to get you up and running.  Feel free to add additional npm packages as you progress.

#### 2. Run `npm run dev`

This will run two scripts concurrently:
1. `npm run api` will start [json-server](https://github.com/typicode/json-server) to provide a stubbed out REST API through `localhost:9001`.
2. `ng serve` will start [angular-cli](https://github.com/angular/angular-cli) to serve up your application.  You should see your default browser open up a window pointing to `localhost:4200`.

#### 3. Navigate to `http://localhost:4200/`

You should see "Welcome!", and information on everything that was built.

### Testing and building

To run tests:
```shell
$ ng test
```

To build the application:
```shell
$ ng build
```

This will create bundled static files and output them to a `dist` folder in the root of this package.