const passport = require('passport');
const { Strategy : LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password'
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({
                where : { email }
            });
            if (!user) {
                return done(null, false, { reason : '존재하지 않는 계정입니다.' });
            }
            const result = await bcrypt.compare(password, user.password);
            if (!result) {
                return done(null, false, { reason : '비밀번호가 일치하지 않습니다.' });
            }
            return done(null, user);
        } catch(e) {
            console.error(e);
            return done(e);
        }
    }));
};