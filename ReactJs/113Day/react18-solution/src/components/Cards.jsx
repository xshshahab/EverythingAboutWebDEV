import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [cards, setCards] = useState([]);

    const fetchData = async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts');
        let response = await data.json();
        setCards(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center text-green-500">Cards List</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cards.map((card, index) => {
                    return (
                        <div
                            key={card.id}
                            className={`p-4 rounded-lg shadow-md text-white ${index % 2 === 0 ? 'bg-purple-600' : 'bg-emerald-500'
                                }`}
                        >
                            <h2 className="mb-2 text-lg font-semibold">{card.title}</h2>
                            <p className="text-sm">
                                {card.body.length > 100 ? card.body.slice(0, 100) + '...' : card.body}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
