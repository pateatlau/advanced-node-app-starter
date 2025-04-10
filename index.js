const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// require('./models/User');
// require('./models/Blog');
// require('./services/passport');

// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const app = express();

// app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// require('./routes/authRoutes')(app);
// require('./routes/blogRoutes')(app);

// if (['production'].includes(process.env.NODE_ENV)) {
//   app.use(express.static('client/build'));

//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client', 'build', 'index.html'));
//   });
// }
////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // console.log(`Listening on port`, PORT);
  // console.log('Directory name:', __dirname);
  // console.log('File name:', __filename);
  // console.log('Environment:', process.env.NODE_ENV);
});

app.get('/', (req, res) => {
  // res.send('Hello World!');
});

const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  // console.log('start');
  // setImmediate(baz);
  // new Promise((resolve, reject) => {
  //   resolve('bar');
  // }).then((resolve) => {
  //   console.log(resolve);
  //   process.nextTick(zoo);
  // });
  // process.nextTick(foo);

  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('async await');
      }, 0);
    });
  }

  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }

  asyncCall();
  setImmediate(() => console.log('SetImmediate 1'));
  setTimeout(() => console.log('SetTimeout 1'), 0);
  setImmediate(() => console.log('SetImmediate 2'));
  process.nextTick(() => console.log('Process.nextTick 1'));
  Promise.resolve().then(() => console.log('Promise 1'));
  async function foo() {
    console.log('Async function 1');
  }
};

start();

// start foo bar zoo baz
