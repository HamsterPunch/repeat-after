exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log('로그인하지 않은 사용자의 요청이라 거절합니다.'); //temp
        res.status(401).send('LOGGED IN user ONLY');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        console.log('이미 로그인한 사용자의 요청이라 거절합니다.'); //temp
        res.status(403).send('NOT LOGGED IN user ONLY');
    }
};