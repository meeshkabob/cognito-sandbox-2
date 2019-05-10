# First thing's first
Create a file `src/environments/environment.ts` based on the file `environment.sample.ts` in the same directory.

Install nativescript. All that jazz.

# Getting Started
Requires the nativescript-cognito plugin (https://github.com/papmodern/nativescript-cognito)
```
tns plugin add nativescript-cognito
```


Usual build procedure
```
tns platform add android
npm i
tns run build android
```

Then to run
```
tns run android --clean
```
