import { useState } from "react";
import useWordStore from "../../stores/WordStore";
import MaskedText from "../MaskedText";
import LetterButtons from "../LetterButtons";
import HangMan from "../HangMan";
import { Link } from "react-router-dom";
/* eslint-disable no-undef */
function PlayGame() {

    const { wordList, word } = useWordStore();
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    
    function handleLetterClick(letter) {
        if(word?.toUpperCase().includes(letter)){
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step +1);
        }
        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <>
        <h1>Play Game</h1>
        {wordList.map((word) => {
            return <li key={word.id}>{word.wordValue}</li>
        })}

        {word && (
            <>
            <MaskedText word={word} guessedLetters={guessedLetters} />
            <div>
                <LetterButtons text = {word} guessedLetters = {guessedLetters} onLetterClick ={handleLetterClick} />
            </div>
            <div>
                <HangMan step = {step} />
            </div>

            </>
        )}
        <Link to = '/'>Home</Link>
        <Link to = '/start' className="text-blue-400">Start Game</Link>

        </>

    );
}

export default PlayGame;