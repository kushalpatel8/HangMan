import { Link } from "react-router";
import TextInputFormContainer from "../TextInputForm/TextInputFormContainer";

function StartGame() {
    return (
        <>
        <h1>Start Game</h1>
        <TextInputFormContainer/>
        <Link to = '/play' className="text-blue-400" >Play Game Link</Link>
        </>
    );
}

export default StartGame;