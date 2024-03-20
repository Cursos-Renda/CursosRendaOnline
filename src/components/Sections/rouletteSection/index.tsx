import { useState } from 'react';
import './App.css'; // Arquivo de estilo CSS
import { CardLi } from './card';
import livro from "../../../assets/Miolo-diagonal-O-livro-dos-amigos-site.png"
import React from "react";

const cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
    { id: 6, content: "Card 6" },
    { id: 7, content: "Card 7" },
    { id: 8, content: "Card 8" },
    { id: 9, content: "Card 9" },
];

export const Roulette = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrevClick = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNextClick = () => {
        setStartIndex(prevIndex => Math.min(cards.length - 5, prevIndex + 1));
    };

    return (
        <div className="roulette-container">
            <button className='move' onClick={handlePrevClick}>{"<"}</button>
            <div className="roulette">
                {cards.slice(startIndex, startIndex + 5).map((card, index) => {
                    let scale = 1;
                    if (index === 0 || index === 4) scale = 0.8;
                    else if (index === 1 || index === 3) scale = 0.9;
                    return (
                        <CardLi
                            key={card.id}
                            className={`card ${index === 2 ? '' : 'blur unvisible'}`}
                            style={{
                                zIndex: index === 2 ? 3 : (index === 0 || index === 4) ? 1 : 2,
                                transform: `scale(${scale})`,
                                borderRadius: "10px",
                                border: "none",
                                "-webkit-box-shadow": "6px 10px 35px 14px rgba(0,0,0,0.47)",
                                " -moz-box-shadow": "6px 10px 35px 14px rgba(0,0,0,0.47)",
                                boxShadow: " 6px 10px 35px 14px rgba(0,0,0,0.47)"
                            }}
                            title={card.content}
                            img={livro}
                        />
                    );
                })}
            </div>
            <button className='move' onClick={handleNextClick}>{">"}</button>
        </div>
    );
};
