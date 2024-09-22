import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord)
        }, 55 * index)
    }

    const onSent = async () => {
        setInput('')
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(prev => [...prev, input])
        const response = await run(input);
        let responseArray = response.split('**');
        let newArray;
        for (let index = 0; index < responseArray.length; index++) {
            if (index == 0 || index % 2 != 1) {
                newArray += responseArray[index]
            } else {
                newArray += "<b>" + responseArray[index] + "</b>";
            }
        }

        let newArray2 = newArray.split('*').join("</br>");
        let newResponseArray = newArray2.split(' ');
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ")
        }
        setLoading(false)
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;