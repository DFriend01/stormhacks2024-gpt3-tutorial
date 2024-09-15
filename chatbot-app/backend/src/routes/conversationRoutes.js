const express = require('express');
const {
    createConversation,
    getConversation,
    deleteConversation,
    addMessageToConversation,
    updateConversationTitle,
} = require('../controllers/conversationController');

const router = express.Router();

// Define routes
router.post('/', createConversation);
router.get('/:id', getConversation);
router.delete('/:id', deleteConversation);
router.post('/:id/messages', addMessageToConversation);
router.put('/:id', updateConversationTitle);

module.exports = router;