import React, { useState } from 'react';

const MultipleCardSearch = () => {
    const [cardList, setCardList] = useState('');
    const [foundCards, setFoundCards] = useState([]);
    const [notFoundCards, setNotFoundCards] = useState([]);

    const handleInputChange = (event) => {
        setCardList(event.target.value);
    };

    const handleSearch = async () => {
        const cardLines = cardList.split('\n');
        const cardNames = [];

        cardLines.forEach((line) => {
            if (line.trim() !== '' && !line.toLowerCase().includes('sideboard')) {
                const parts = line.split(' ').filter((part) => part !== '');
                const quantity = parseInt(parts[0]);
                const name = parts.slice(1).join(' ');
                if (!isNaN(quantity)) {
                    cardNames.push(name);
                }

                // section that adds current card to the not found list bc it does not have an appropriate quantity 
            }
        });

        try {
            const promises = cardNames.map((name) =>
                fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(name);
                        }
                        return response.json();
                    })
                    .catch((error) => ({ name: error.message, notFound: true }))
            );

            const cardsData = await Promise.all(promises);

            const found = cardsData.filter((card) => !card.notFound);
            const notFound = cardsData.filter((card) => card.notFound);

            setFoundCards(found);
            setNotFoundCards(notFound.map((card) => card.name));
        } catch (error) {
        console.error('Error fetching card data:', error);
        }
    };

    const resultsAvailable = foundCards.length > 0 || notFoundCards.length > 0;

    return (
        <div className='mass-entry'>
            <h2>Search for Multiple Cards</h2>
            <textarea
                placeholder="Enter card list in the specified format"
                value={cardList}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>

            {resultsAvailable && (
                <div className='results'>
                    <div className='cards-found'>
                        {foundCards.length > 0 && (
                        <div>
                            <h3>Found Cards:</h3>
                            <ul>
                            {foundCards.map((card, index) => (
                                <li key={index}>{card.name}</li>
                            ))}
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className="cards-not-found">
                        <h3>Not Found Cards:</h3>
                        <ul>
                            {notFoundCards.map((card, index) => (
                            <li key={index}>{card}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultipleCardSearch;