import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        generateQuote();
    },[]);

    async function generateQuote(){
        console.log("error")
        let result = await fetch("https://api.quotable.io/random")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })
    }

    return (
        <div className="App">
            <header>
                    <div>
                        <blockquote>The man who comes back through the door in the wall will never be quite the same as the man who went out.</blockquote>
                        <cite>qwe</cite><br />
                    </div>
                <button className='btn' onClick={()=>{ generateQuote() }}>Next Quote</button>
            </header>
        </div>
    );
}

export default App;
