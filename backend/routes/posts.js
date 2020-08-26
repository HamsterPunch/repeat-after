const express = require('express');
const { Op } = require('sequelize');

const { Post } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) {
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
        }
        const posts = await Post.findAll({
            where,
            limit: parseInt(req.query.limit, 10),
            attributes: ['id', 'title', 'description', 'thumbnail_src'],
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json(posts);
    } catch(e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;