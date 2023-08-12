# Express Application with Working Hour Middleware
This is a simple Express application that demonstrates the usage of middleware to restrict access to certain routes based on working hours.

# instalaion
initialaze your package json

npm install express
npm i nodemon
modificate file json package :
  change file index.js on server.js
  create add :"sever" : "nodemon server.js" in the "script key"


Your Express application should now be running on port 5000. You can access it by opening a web browser and navigating to http://localhost:5000.
Middleware Explanation
The application uses a middleware named workingHourMiddleware to restrict access to certain routes (/, /contact_us, /services) based on working hours. The middleware checks the current day and hour, and if the conditions are met, it allows the request to proceed; otherwise, it sends a "401 Unauthorized" response.

# Routes
/ : Home page that serves the home.html file.
/contact_us : Contact us page that serves the contact_us.html file.
/services : Our services page that serves the our_services.html file.
/style.css : Serves the style.css file for styling.
# Files and Directories
views/ : Contains the HTML and CSS files for the views.
views/home.html : Home page HTML.
views/contact_us.html : Contact us page HTML.
views/our_services.html : Our services page HTML.
views/style.css : CSS styles.
# Notes
The application uses the Express framework to create a simple server and handle routes.
The middleware workingHourMiddleware restricts access based on the current day and hour.
The static files (HTML, CSS) are served using the express.static middleware.






Regenerate
