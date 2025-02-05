import { useState } from "react";
import WordContext from "./context/WordContext";
import Routes from "./routes";
import { Route } from "react-router-dom";
import StartGame from "./src/components/Pages/Startgame";
import PlayGame from "./src/components/Pages/Playgame";
import Home from "./src/components/Pages/Home";

function App () {

    const [wordList, setWordList] = useState([]);
    const [word, setWord] = useState("");

    return(
        <WordContext.Provider value={{wordList, setWordList, word, setWord}}>  
        <Routes>
            <Route path = '/start' element = {<StartGame/>}/>
            <Route path = '/play' element = {<PlayGame/>} />
            <Route path = '/' element = {<Home/>} />
        </Routes>
        </WordContext.Provider>
    );
}

export default App;