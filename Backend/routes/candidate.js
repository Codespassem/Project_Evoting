const express = require('express');
const router = express.Router();
const { addCandidate, getCandidatesByElection } = require('../controllers/candidateController');



router.post('/', addCandidate);
router.get('/:electionId', getCandidatesByElection);

module.exports = router;
