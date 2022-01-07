import React, {useState, useEffect} from 'react';
import './Meme.css';

export default function Meme() {
    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg",
    });

    function handleChange(e){
        setMeme(prevValue => {
            return({
                ...prevValue,
                [e.target.name] : e.target.value,
            })
        })
    }

    const [allMemes, setAllMemes] = useState([]);

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick(){
        let random = Math.floor(Math.random()*(allMemes.length));
        let memeUrl = allMemes[random].url;
        setMeme(prevMeme => {
            return({
                ...prevMeme,
                randomImage : memeUrl
            })
        });
    }

    return (
        <main className = "meme">
            <div className = "form">
                <input 
                    type="text"
                    className = "form--input"
                    placeholder = "Top Text" 
                    name = "topText"
                    onChange = {handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className = "form--input"
                    placeholder = "Bottom Text"
                    name = "bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button onClick={handleClick} className = "form--button">Get a new Meme image </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--img" alt = "meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
