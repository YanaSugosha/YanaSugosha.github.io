
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
  { url:"assets/logo.png", revision: '1' },
  { url:"assets/icon/icon-192x192.png", revision: '1' },
  { url:"assets/icon/icon-256x256.png", revision: '1' },
  { url:"assets/icon/icon-384x384.png", revision: '1' },
  { url:"assets/icon/icon-512x512.png", revision: '1' },
  { url:"/css/materialize.min.css", revision: '1' },
  { url:"/css/main.css", revision: '1' },
  { url:"/js/api.js", revision: '1' },
  { url:"/js/db.js", revision: '1' },
  { url:"/js/DetailTeam.js", revision: '1' },
  { url:"/js/idb.js", revision: '1' },
  { url:"/js/sw-register.js", revision: '1' },
  { url:"/js/KumpulanTeam.js", revision: '1' },
  { url:"/js/materialize.min.js", revision: '1' },
  { url:"/js/nav.js", revision: '1' },
  { url:"/pages/home.html", revision: '1' },
  { url:"/pages/about.html", revision: '1' },
  { url:"/pages/contact.html", revision: '1' },
  { url:"/pages/favorit.html", revision: '1' },
  { url:"/nav.html", revision: '1' },
  { url:"/index.html", revision: '1' },
  { url:"/tim.html", revision: '1' },
  { url:"/manifest.json", revision: '1' },
  { url:"/push.js", revision: '1' },
  { url:"https://fonts.googleapis.com/icon?family=Material+Icons", revision: '1' },
  { url:"https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2", revision: '1' },
]);

workbox.routing.registerRoute(
  new RegExp('/push.js'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'push'
})
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'link1'
})
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/icon?family=Material+Icons'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'link'
})
);

workbox.routing.registerRoute(

  new RegExp('/manifest.json'),
  
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'manifest'
})
);

workbox.routing.registerRoute(

  new RegExp('/tim.html'),

  workbox.strategies.staleWhileRevalidate({
    cacheName: 'tim'
})
);

workbox.routing.registerRoute(

  new RegExp('/index.html'),

  workbox.strategies.staleWhileRevalidate({
    cacheName: 'index'
})
);

workbox.routing.registerRoute(

  new RegExp('/nav.html'),

  workbox.strategies.staleWhileRevalidate({
    cacheName: 'nav'
})
);

workbox.routing.registerRoute(

  new RegExp('https://crests.football-data.org/'),

  workbox.strategies.staleWhileRevalidate({
    cacheName: 'api2'
})
);

workbox.routing.registerRoute(

  new RegExp('https://api.football-data.org/v2/'),

  workbox.strategies.staleWhileRevalidate({
    cacheName: 'api'
})
);

workbox.routing.registerRoute(
  new RegExp('/js/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'js'
})
);

workbox.routing.registerRoute(
  new RegExp('/css/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css'
})
);


workbox.routing.registerRoute(
  new RegExp('/assets/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'assets'
})
);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'pages'
})
);



self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('My-SPort', options)
  );
});
