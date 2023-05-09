// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

// self.addEventListener("fetch", (event) => {
//   console.log(`URL requested: ${event.request.url}`);

//   const options = {
//     status: 200,
//     headers: {
//       "Content-type": "text/html",
//     },
//   };
//   const htmlResponse = new Response("<b>HTML</b> content", options);

//   // event.respondWith(htmlResponse);
// });
