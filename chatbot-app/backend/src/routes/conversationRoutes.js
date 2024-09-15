const express = require('express');
const {
    createConversation,
    getConversations,
    getConversationMessages,
    deleteConversation,
    addMessageToConversation,
    updateConversationTitle,
} = require('../controllers/conversationController');

const router = express.Router();

// Define routes
router.post('/', createConversation);
router.get('/', getConversations);
router.put('/:id', updateConversationTitle);
router.delete('/:id', deleteConversation);
router.get('/:id/messages', getConversationMessages);
router.post('/:id/messages', addMessageToConversation);

module.exports = router;