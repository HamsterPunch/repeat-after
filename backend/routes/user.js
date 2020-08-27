const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');

const router = express.Router();

try {
    fs.accessSync('upload_image');
} catch(e) {
    console.log('upload_image folder has been created.');
    fs.mkdirSync('upload_image');
}

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2'
});

const uploadImage = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'repeat-after/image',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limits: { fileSize: 1024 * 1024 * 20 }
});

router.get('/', async (req, res, next) => {
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            });
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch(e) {
        console.error(e);
        next(e);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (logInErr) => {
            if (logInErr) {
                console.error(logInErr);
                return next(logInErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            });
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});
router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

router.post('/', isNotLoggedIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: { email: req.body.email }
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 이메일입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
            role: req.body.role
        });
        res.status(201).send('ok');
    } catch(e) {
        console.error(e);
        next(e);
    }
});

router.post('/image', isLoggedIn, uploadImage.array('image'), (req, res, next) => {
    res.json(req.files.map(v => v.location));
});

router.patch('/profile', isLoggedIn, uploadImage.none(), async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.user.id }
        });
        await User.update({
            nickname: req.body.nickname ? req.body.nickname : user.nickname,
            image: req.body.image ? req.body.image : user.image
        }, {
            where: { id: req.user.id }
        });
        const newUser = await User.findOne({
            where: { id: req.user.id }
        });
        res.status(200).json({ nickname: newUser.nickname, image: newUser.image });
    } catch(e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;