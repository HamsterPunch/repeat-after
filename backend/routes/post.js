const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { isLoggedIn } = require('./middlewares');
const { User, Post, Line, Comment } = require('../models');

const router = express.Router();

try {
    fs.accessSync('upload_video');
} catch(e) {
    console.log('upload_video folder has been created');
    fs.mkdirSync('upload_video');
}

try {
    fs.accessSync('upload_subtitle');
} catch(e) {
    console.log('upload_subtitle folder has been created');
    fs.mkdirSync('upload_subtitle');
}

try {
    fs.accessSync('upload_thumbnail');
} catch(e) {
    console.log('upload_thumbnail folder has been created');
    fs.mkdirSync('upload_thumbnail');
}

try {
    fs.accessSync('upload_audio');
} catch(e) {
    console.log('upload_audio folder has been created');
    fs.mkdirSync('upload_audio');
}

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2'
});

const uploadVideo = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'repeat-after/video',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limits: { fileSize: 1024 * 1024 * 10 }
});
const uploadSubtitle = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'repeat-after/subtitle',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limit: { fileSize: 1024 * 1024 * 1 }
});
const uploadThumbnail = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'repeat-after/thumbnail',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limit: { fileSize: 1024 * 1024 * 2 }
});
const uploadAudio = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: 'repeat-after/audio',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    limit: { filiSize: 1024 * 1024 * 5 }
});

router.post('/video', isLoggedIn, uploadVideo.array('video'), async (req, res) => {
    res.json(req.files.map(v => v.location));
});
router.post('/subtitle', isLoggedIn, uploadSubtitle.array('subtitle'), async (req, res) => {
    res.json(req.files.map(v => v.location));
});
router.post('/thumbnail', isLoggedIn, uploadThumbnail.array('thumbnail'), async (req, res) => {
    res.json(req.files.map(v => v.location));
});
router.post('/audio', isLoggedIn, uploadAudio.array('audio'), async (req, res) => {
    res.json(req.files.map(v => v.location));
});
router.post('/', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            description: req.body.description,
            video_src: req.body.video_src,
            subtitle_kr_src: req.body.subtitle_kr_src,
            subtitle_en_src: req.body.subtitle_en_src,
            thumbnail_src: req.body.thumbnail_src
        });
        await Promise.all(req.body.lines.map(v => Line.create({
            audio_src: v.audio_src,
            subtitle_kr: v.sub_kr,
            subtitle_en: v.sub_en,
            description: v.description,
            order: v.order,
            PostId: post.id
        })));
        // { PostId }
        res.status(201).json({ PostId: post.id});
    } catch(e) {
        console.error(e);
        next(e);
    }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: parseInt(req.params.postId, 10) }
        });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.addLikers(req.user.id);
        res.json({ UserId: req.user.id });
    } catch(e) {
        console.error(e);
        next(e);
    }
});
router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: parseInt(req.params.postId, 10) }
        });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.removeLikers(req.user.id);
        res.json({ UserId: req.user.id });
    } catch(e) {
        console.error(e);
        next(e);
    }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: parseInt(req.params.postId, 10)}
        });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            UserId: req.user.id,
            PostId: parseInt(req.params.postId, 10)
        });
        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['nickname', 'image']
            }]
        });
        res.status(201).json(fullComment);
    } catch(e) {
        console.error(e);
        next(e);
    }
});

router.get('/:postId', async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: parseInt(req.params.postId, 10) },
            include: [{
                model: User,
                as: 'Likers',
                attributes: ['id']
            }, {
                model: Line,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['nickname', 'image'],
                }]
            }]
        });
        res.status(200).json(post);
    } catch(e) {
        console.error(e);
        next(e);
    }
});
router.delete('/:postId', (req, res) => {
    
});

module.exports = router;