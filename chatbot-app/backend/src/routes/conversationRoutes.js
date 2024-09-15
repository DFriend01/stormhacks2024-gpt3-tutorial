const express = require('express');
const {
    createConversation,
    getConversations,
    deleteConversation,
    addMessageToConversation,
    updateConversationTitle,
} = require('../controllers/conversationController');

const router = express.Router();

// Define routes
router.post('/', createConversation);
router.get('/', getConversations);
router.delete('/:id', deleteConversation);
router.post('/:id/messages', addMessageToConversation);
router.put('/:id', updateConversationTitle);

module.exports = router;