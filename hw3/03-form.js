const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => { body += chunk;});

  req.on('end', () => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    switch (url.pathname) {

      case '/': {

        res.writeHead(302, { Location: '/form' });
        break;
      }

      case '/form': {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(form_html_string);
        break;
      }

      case '/submit': {
        let search_parameters = new URLSearchParams(body);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<P>Name: ${search_parameters.get('nameInput')}</P>`);
        res.write(`<P>Email: ${search_parameters.get('emailInput')}</P>`);

        let feedback_message = search_parameters.get('messageInput');
        if (feedback_message.length === 0) {
          feedback_message = 'n/a';
        }
        res.write(`<P>Comments: ${feedback_message} </P>`);

        let checkbox_message = 'No, thank you.';
        if (search_parameters.has('newsletterCheckbox')) {
          checkbox_message = 'Yes, sign me up for the newsletter.';
        }
        res.write(`<P>Newsletter: ${checkbox_message}</P>`);
        break;
      }

      default: {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<H1>404 - Page not found!</H1>`);
      }
    }
    res.end();
  });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

let form_html_string = `<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>03 - Form</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    />
  </head>
  <body class="bg-dark">
    <form class="bg-light border rounded w-50 mx-auto mt-5 p-3" action="/submit" method="post">
      <h1 class="mt-2 mb-4">Contact Form</h1>

      <div class="form-group">
    <p><label for="nameInput">Name <sup>*</sup></label> </p>
    <input type="text" class="form-control" id="nameInput" name="nameInput" placeholder="Enter Name" required>
  </div>
  <br>
  <div class="form-group">
    <p><label for="emailInput">Email <sup>*</sup></label> </p>
    <input type="email" class="form-control" id="emailInput" name="emailInput" placeholder="Email Address" required>
  </div>
  <p>
  <div class="col-md-12">
    <textarea type="string" class="form-control" id="messageInput" name="messageInput" placeholder="Enter your message"></textarea>
  </div>
  <p>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="newsletterCheckbox" name="newsletterCheckbox">
    <label class="form-check-label" for="newsletterCheckbox">Sign up for the newsletter</label>
  </div>
  </p>
  <button type="submit" class="btn btn-primary" id="reverse">Submit</button>
  <button type="reset" class ="btn btn-secondary" id="resetButton" >Reset</button>
    </form>
  </body>`;
