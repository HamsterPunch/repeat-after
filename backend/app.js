const express = require('express');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

const db = require('./models');
const passportConfig = require('./passport');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');

const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('Database Connected Successfully');
    })
    .catch((e) => {
        console.log('Database Connection Failed');
        console.log(e);
    });
passportConfig();

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet());
} else {
    app.use(morgan('dev'));
}
app.use(cors({
    origin : ['http://localhost:4000'],
    credentials : true
}));
app.use('/', express.static(path.join(__dirname, 'upload_image')));
app.use('/', express.static(path.join(__dirname, 'upload_video')));
app.use('/', express.static(path.join(__dirname, 'upload_thumbnail')));
app.use('/', express.static(path.join(__dirname, 'upload_audio')));
app.use('/', express.static(path.join(__dirname, 'upload_subtitle')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized : false,
    resave : false,
    secret : process.env.COOKIE_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/posts', postsRouter);

app.listen(80, () => {
    console.log('Repeat After backend server is running on port 80');
});