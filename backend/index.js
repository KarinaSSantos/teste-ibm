const express = require('express')
const app = express.createServer();
const port = 3000
const ClientOAuth2 = require('client-oauth2')

const googleAuth = new ClientOAuth2({
  clientId: '165405431139-1jasot38gu0ggsd7lf1md2ci2qutntja.apps.googleusercontent.com',
  clientSecret: 'SQa554RI_tpZhGYzewvOLR9Q',
  accessTokenUri: 'https://accounts.google.com/o/oauth2/auth',
  authorizationUri: 'https://accounts.google.com/o/oauth2/token',
  redirectUri: 'http://example.com/auth/google/callback',
  scopes: ['userinfo.eamil', 'userinfo.profile']
})

const twitterAuth = new ClientOAuth2({
  clientId: 'abc',
  clientSecret: '123',
  accessTokenUri: 'https://twitter.com/oauth/access_token',
  authorizationUri: 'https://twitter.com/oauth/request_token',
  redirectUri: 'http://example.com/auth/twitter/callback',
  scopes: ['notifications', 'gist']
})

const linkedinAuth = new ClientOAuth2({
  clientId: '7737cqwpkjoxar',
  clientSecret: 'j2JfpjofKzo5oUgk',
  accessTokenUri: 'https://www.linkedin.com/oauth/v2/accessToken',
  authorizationUri: 'https://www.linkedin.com/oauth/v2/authorization',
  redirectUri: 'http://example.com/auth/linkedin/callback',
  scopes: ['notifications', 'gist']
})

app.get('/auth/google', function (req, res) {
  var uri = googleAuth.code.getUri()
  res.redirect(uri)
})


app.get('/auth/twitter', function (req, res) {
  var uri = twitterAuth.code.getUri()
  res.redirect(uri)
})


app.get('/auth/linkedin', function (req, res) {
  var uri = linkedinAuth.code.getUri()
  res.redirect(uri)
})

app.get('/auth/google/callback', function (req, res) {
  googleAuth.code.getToken(req.originalUrl)
    .then(function (user) {
      console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
 
      // Refresh the current users access token.
      user.refresh().then(function (updatedUser) {
        console.log(updatedUser !== user) //=> true
        console.log(updatedUser.accessToken)
      })
 
      // Sign API requests on behalf of the current user.
      user.sign({
        method: 'get',
        url: 'http://example.com'
      })
 
      // We should store the token into a database.
      return res.send(user.accessToken)
    })
})

app.get('/auth/twitter/callback', function (req, res) {
  twitterAuth.code.getToken(req.originalUrl)
    .then(function (user) {
      console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
 
      // Refresh the current users access token.
      user.refresh().then(function (updatedUser) {
        console.log(updatedUser !== user) //=> true
        console.log(updatedUser.accessToken)
      })
 
      // Sign API requests on behalf of the current user.
      user.sign({
        method: 'get',
        url: 'http://example.com'
      })
 
      // We should store the token into a database.
      return res.send(user.accessToken)
    })
})

app.get('/auth/linkedin/callback', function (req, res) {
  linkedinAuth.code.getToken(req.originalUrl)
    .then(function (user) {
      console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
 
      // Refresh the current users access token.
      user.refresh().then(function (updatedUser) {
        console.log(updatedUser !== user) //=> true
        console.log(updatedUser.accessToken)
      })
 
      // Sign API requests on behalf of the current user.
      user.sign({
        method: 'get',
        url: 'http://example.com'
      })
 
      // We should store the token into a database.
      return res.send(user.accessToken)
    })
})

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})