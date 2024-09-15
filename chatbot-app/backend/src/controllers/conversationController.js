const conversationModel = require('../models/conversationModel');

// Controller to create a new conversation
const createConversation = async (req, res) => {
    /**
     * Expected request format:
     * {
     *   "title": "Conversation Title"
     * }
     * 
     * Expected response format:
     * {
     *   "id": 1,
     *   "title": "Conversation Title"
     * }
     */
    try {
        const { title } = req.body;
        const id = await conversationModel.addConversation(title);
        res.status(201).json({ id, title });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all conversations
const getConversations = async (req, res) => {
    /**
     * Expected response format:
     * [
     *   {
     *     "id": 1,
     *     "title": "Conversation Title"
     *   },
     *   ...
     * ]
     */
    try {
        const conversations = await conversationModel.getConversations();
        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a conversation title
const updateConversationTitle = async (req, res) => {
    /**
     * Expected request format:
     * {
     *   "title": "New Conversation Title"
     * }
     * 
     * Expected response format:
     * {
     *   "id": 1,
     *   "title": "New Conversation Title"
     * }
     */
    try {
        const { id } = req.params;
        const { title } = req.body;
        const changes = await conversationModel.updateConversationTitle(id, title);
        if (changes > 0) {
            res.status(200).json({ id, title });
        } else {
            res.status(404).json({ error: 'Conversation not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a conversation
const deleteConversation = async (req, res) => {
    /**
     * Expected request format:
     * {
     *   "id": 1
     * }
     * 
     * Expected response format:
     * {
     *   "message": "Conversation deleted"
     * }
     */
    try {
        const { id } = req.params;
        await conversationModel.removeConversation(id);
        res.status(200).json({ message: 'Conversation deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to add a message to a conversation
const addMessageToConversation = async (req, res) => {
    /**
     * Expected request format:
     * {
     *   "role": "user",
     *   "message": "Hello, how can I help you?"
     * }
     * 
     * Expected response format:
     * {
     *   "conversation_id": 1,
     *   "message_id": 1,
     *   "role": "user",
     *   "message": "Hello, how can I help you?"
     * }
     */
    try {
        const { conversation_id } = req.params;
        const { role, message } = req.body;
        const message_id = await conversationModel.addMessageToConversation(conversation_id, role, message);
        res.status(201).json({ conversation_id, message_id, role, message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get messages of a conversation
const getConversationMessages = async (req, res) => {
    /**
     * Expected response format:
     * [
     *   {
     *     "conversation_id": 1,
     *     "message_id": 1,
     *     "role": "user",
     *     "message": "Hello, how can I help you?"
     *   },
     *   ...
     * ]
     */
    try {
        const { conversation_id } = req.params;
        const messages = await conversationModel.getConversationMessages(conversation_id);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createConversation,
    getConversations,
    deleteConversation,
    addMessageToConversation,
    updateConversationTitle,
    getConversationMessages
};