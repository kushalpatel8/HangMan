/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import Button from '../Button';
import useWordStore from '../../stores/WordStore';
import { use } from 'react';
import { useEffect } from 'react';
function Home () {

    const {setWordList, setWord} = useWordStore();
    
    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();  
        console.log(data);
        setWordList([...data]);
        
        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);
    
    return (
        <>
        <Link to = '/play'>
            <Button text="Single Player" />
        </Link>
        <br />
        <Link to = '/start'>
            <div className='mt-4'>
                <Button text="Multiplayer" styleType = "secondary" /> 
            </div>
        </Link>
        </>
    );
}
export default Home;