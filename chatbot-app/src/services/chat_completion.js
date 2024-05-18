import OpenAI from "openai";

const get_gpt_response = (messages) => {
  // There should be a better way to do this rather than on each function call...
  const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});
  const completion = openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }].concat(messages),
    model: "gpt-3.5-turbo"
  });
  return completion;
}

export default get_gpt_response;
