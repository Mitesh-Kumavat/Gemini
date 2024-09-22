import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyBiCUgGEuf3Da9UXjZGNsvzfbas1czjd6Y";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    try {
        const result = await chatSession.sendMessage(prompt);
        const response = result.response.text();
        console.log(response);
        return response;
    } catch (error) {
        console.log('error caught in Gemini api');
    }
}

run();

export default run;
