import { OpenAI } from 'openai';
const apiKey = import.meta.env.VITE_OPEN_AI_KEY
const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true,})

let response = ''

async function callApi(file) {
  try {
    console.log(`File obj in function: ${file}`)
    if (!(file instanceof File)) {
      throw new Error("Provided input is not a valid file");
    }
    const completion = await openai.audio.transcriptions.create({
      file: file,
      model: "whisper-1",
    });

    response = completion.text
    console.log('OpenAI Response:', response);
    
  } catch (error) {
    console.error('Error with OpenAI API:', error);
  }
  return response;
}


export {callApi}

