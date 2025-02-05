/* eslint-disable react/prop-types */
import { getMaskesdString } from "./MaskinUtility";

function Maskedtext({text, guessedLetters}) {
    const maskedString = getMaskesdString(text, guessedLetters);
    return(
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    );
}

export default Maskedtext;