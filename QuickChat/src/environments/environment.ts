// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAdCZHsrlA4AxtA_F3ukH75YSiQohybqHI",
    authDomain: "laritz-quick-chat.firebaseapp.com",
    databaseURL: "https://laritz-quick-chat.firebaseio.com",
    projectId: "laritz-quick-chat",
    storageBucket: "laritz-quick-chat.appspot.com",
    messagingSenderId: "787950218566"
  }
};
