**nodejs-gpio-ui is deprecated. Use [the angular-cli version instead](https://github.com/bresheske/ng-gpioui) instead.**

# nodejs-gpio-ui
This is the UI (web) for the nodejs-gpio-api project.  

## Installing/Running
```
npm install
npm start
```

## Changing the switches (buttons)
The definitions of the switches are located in /app/services/switches.service.ts.  They point to another IP address and GPIO pin of a raspberry pi.  These devices need to be running nodejs-gpio-api.
