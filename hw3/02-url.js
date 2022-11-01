const http = require('http');

const port = process.env.PORT || 3000; // Changing from 5000 to 3000 because 5000 doesn't work in macOS 13.0

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code here

  else if (req.url.includes('?')) {
    let param_string = url.toString().split('?')[1];
    let url_parameters  = new URLSearchParams(param_string);

    let entries = url_parameters.entries();

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`<TABLE BORDER = "2">`);
    for (const [key, value] of entries) {
      res.write(`<TR> <TD> ${key} </TD> <TD> ${value} </TD> </TR>`);
    }
    res.write(`</TABLE>`);
    res.end();
  }

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
