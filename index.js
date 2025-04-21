import { genkit } from 'genkit';
import { googleAI, gemini20Flash } from '@genkit-ai/googleai';

const ai = genkit({ plugins: [googleAI()] });

const { text } = await ai.generate({
    model: gemini20Flash,
    prompt: 'Why is Firebase awesome?'
});

console.log(text);
