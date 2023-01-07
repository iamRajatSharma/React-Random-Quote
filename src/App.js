import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        generateQuote();
    },[]);

    async function generateQuote(){
        await fetch("https://api.quotable.io/random")
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
                        <blockquote>{ data.content }</blockquote>
                        <cite>{ data.author }</cite><br />
                    </div>
                <button className='btn' onClick={()=>{ generateQuote() }}>Next Quote</button>
            </header>
        </div>
    );
}

export default App;
