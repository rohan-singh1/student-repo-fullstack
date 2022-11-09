const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

app.use(session({secret: "Execute_Order_66", saveUninitialized: false, resave: false, store: new session.MemoryStore()}));

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

app.get("*", (req, res) => {

  if (req.session.routesVisited) {

    let message  = "Currently on route: " + req.url +
    "<BR> <BR> Previously visited: <BR>";

    req.session.routesVisited.forEach(route => {
        message = message.concat("<BR>" + route);  
      });

    req.session.routesVisited.push(req.url);
    res.send(message);
    res.end();

  } else {
    req.session.routesVisited = [];

    let message  = "Currently on route: " + req.url + "<BR><BR>" + 
    "Welcome to " + req.protocol + "://" + req.get("host") + req.url;
    
    req.session.routesVisited.push(req.url);
    res.send(message);
    res.end();
  }
});

// POST request
app.post('', (req, res) => {
  // Add your code here
  
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
