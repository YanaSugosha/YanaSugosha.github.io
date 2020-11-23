var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BNHUoJNhmTed-7nfPRnW7B7wMDqJhq73azjYLHnXnHSlc0Iuxfhz8ZtjddLZH3yo2WslS8UFcJa7RB5q94fjZvg",
   "privateKey": "azzLL13pfgvdzMd6mQOI3A4onN94Kgjf7AaHg_7nHAA"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://sg2p.notify.windows.com/w/?token=BQYAAADRSGw0EKY9%2bRH4p8GcfNkBH5dsILqQ9uSSMj99rWiFwm1lwANi7BZVSvPiFMRa8uG60CuX21RMgQesESwLi4qzm%2bZpM%2bZ3C7gd3wgDXnkA89GI1osk5NmMtpuLVnHlMOKp4o6MpgoIi33q49ZEh2lajkYhMmh8TUeQTSl%2fns0%2ffxINaTciQipAqzy033CJyFLpx7heYzoQ55bxifCYIKs466aOsbuBAc%2bWhdOTysNSIlEDUA%2fwFLtUgZs0iDqJqRGHEnjKAnDUzEzq8ZFt72wYg0Ty8%2ba4HmuY5OKRPqFR9xf9FGBdr5ISLykerG%2beJRY%3d"
   ,
   "keys": {
       "p256dh": "BEwsTPOO8MW7yInEzerlZtUgNBt9YE+W4cvwhHdAKyheJU9Jw78VXDo7sSYVwrI1gdLvdW0eRphkytbG4aqS/8g=",
       "auth": "KK9kzbhxdRIchBUKzYbjWA=="
   }
};
var payload = 'Selamat datang di My-Sport';
 
var options = {
   gcmAPIKey: '365926314989',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);