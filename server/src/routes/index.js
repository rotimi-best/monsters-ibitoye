const router = require('express').Router({ strict: true, mergeParams: true });

const UserRoutes = require('../components/user/user.routes');
const QuestionRoutes = require('../components/question/question.routes');

const AuthService = require('../../src/services/auth.service');
const TokenGeneratorService = require('../../src/services/token.service');

// Authorization not required
router.use('/token', TokenGeneratorService);

// Authorization required
router.use('/user', AuthService, UserRoutes);
router.use('/question', AuthService, QuestionRoutes);

module.exports = router;
