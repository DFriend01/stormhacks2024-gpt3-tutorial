require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

const getGptResponse = async (messages) => {
    // Implement this function
};

module.exports = { getGptResponse };
