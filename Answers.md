1.  Explain the differences between `client-side routing` and `server-side routing`.

`client-side routing` is when the routing of the app is handled internally by JS that is already loaded to the page.
The initial load of the webpage downloads the whole app.

With `server-side routing`, when the user clicks on some link, the request is sent to server, which retrieves that information
and returns it back to the app, where the page will be reloaded.

The main difference is that with `server-side routing` the server refreshes the whole page on user interactions and downloads only specific
app content (html file), where with `client-side-routing` the whole app is downloaded on first load but on user interaction only the specific part of DOM is re-rendered.

1.  What does HTTP stand for?

HTTP = HyperText Transfer Protocol - it is a network protocol (rules) on how web clients communicate with web servers over the internet

1.  What does CRUD stand for?

CRUD = Create, Read, Update, Delete. These are HTTP methods to perform operations on server resources.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C = Create -> POST method
R = Read -> GET method
U = Update -> PUT method
D = Delete -> DELETE method

1.  Mention three tools we can use to make AJAX requests

Standard JavaScript methods - fetch().then().catch()
axios library
jQuery library