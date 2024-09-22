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


// Let's get your Gemini API response looking beautiful in your React project. Here's a breakdown of how to format JSON data for readability: **Understanding the Problem** The issue you're encountering is common when working with JSON APIs: the raw response usually comes as a single, long string. To make this data human-readable, we need to parse and then format it. **Solution** Here's a comprehensive solution using JavaScript's `JSON.stringify` and React's `JSON.stringify` methods: ```javascript import React, { useState, useEffect } from 'react'; function MyComponent() { const [geminiResponse, setGeminiResponse] = useState(null); useEffect(() => { // Fetch data from your Gemini API fetch('https://api.example.com/gemini/data') .then(response => response.json()) .then(data => { // Format the response for readability const formattedResponse = JSON.stringify(data, null, 2); setGeminiResponse(formattedResponse); }) .catch(error => console.error('Error fetching data:', error)); }, []); return (
// Gemini API Response
// {geminiResponse}
// {/* Display the formatted response */}
// ); } export default MyComponent; ``` **Explanation** 1. **`useEffect`:** This hook is used to fetch data from your Gemini API endpoint. 2. **`fetch()`:** This function makes the API call. 3. **`response.json()`:** Parses the response from the API into a JavaScript object. 4. **`JSON.stringify(data, null, 2)`:** - `JSON.stringify` converts the JavaScript object back into a JSON string. - The `null` parameter tells it to not include any properties in the resulting JSON string. - The `2` parameter specifies an indentation of 2 spaces, making the output more readable. 5. **`setGeminiResponse(formattedResponse)`:** Updates the `geminiResponse` state with the formatted JSON string. 6. **`pre` tag:** The `pre` tag in React renders the formatted JSON string with its indentation preserved, making it visually appealing. **Important Considerations** - **API Endpoint:** Replace `https://api.example.com/gemini/data` with your actual Gemini API endpoint. - **Error Handling:** The `catch` block in the `useEffect` function handles potential errors during the API call. - **Data Structure:** The `pre` tag is a simple way to display formatted JSON. If you need more complex interaction with the response data, you might want to use a library like `react-json-view` for interactive JSON rendering. Let me know if you have any questions or need help with specific API calls or data formatting!
