import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OPENAI_API_KEY } from '$env/static/private';

// Create an OpenAI API client
const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST({ request }) {
  const { messages, continueTyping } = await request.json();
  console.log('messages', messages);
  console.log('continueTyping', continueTyping);

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0,
    messages,
    stream: true,
  });
  console.log('response', response);

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}