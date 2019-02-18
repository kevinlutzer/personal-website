// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDbMvCGwA74RM8IWThqZ52FS1Vh41B7-lY',
    authDomain: 'website-klutzer.firebaseapp.com',
    databaseURL: 'https://website-klutzer.firebaseio.com',
    projectId: 'website-klutzer',
    storageBucket: 'website-klutzer.appspot.com',
    messagingSenderId: '225726413234'
  }
};
