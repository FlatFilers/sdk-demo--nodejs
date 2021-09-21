const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const EMBED_ID = 'YOUR_EMBED_ID'
const PRIVATE_KEY = 'YOUR_PRIVATE_KEY'

app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile)

app.get('/', async (_req, res) => {
  const currentUser = {
    email: 'your.user@example.com'
  }

  return res.render('index.html', {
    token: await jwt.sign({
      embed: EMBED_ID,
      sub: currentUser.email
    }, PRIVATE_KEY)
  })
})

app.listen(4242)