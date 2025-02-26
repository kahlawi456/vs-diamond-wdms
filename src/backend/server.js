const express = require('express');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();
const csrfProtection = csurf({ cookie: true });

app.use(cookieParser());
app.use(csrfProtection);

app.get('/form', (req, res) => {
  res.send(`
    <form action="/process" method="POST">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/process', (req, res) => {
  res.send('Form processed');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});