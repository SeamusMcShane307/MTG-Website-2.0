import { useEffect, useState } from "react"

// my files
import { fetchCardImage } from "../scryfallAPI/fetchCardImage";
import "../css/tradeList.css"; 

const Trade = () => {
    const [cards, setCards] = useState([]);
    const [allTrades, setAllTrades] = useState([]);
    const [tradeImages, setTradeImages] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const cardIdentifiers = ['Black Lotus', 'Time Walk'];
            // Constructing the request body
            const requestBody = {
                identifiers: cardIdentifiers.map(name => ({ name })),
                // Other optional parameters can be added here, like 'format' or 'face'
            };

            try {
                const response = await fetch('https://api.scryfall.com/cards/collection', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });
            
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const data = await response.json();
                console.log(data);
                const names = data.data.map(card => card.name);
                setCards(names);
            } catch(error) {
                console.error("There was a problem with the Scryfall fetch: ", error)
            }
        };

        fetchCards();
    }, []);

    useEffect(() => {
        const getAllTrades = async () => {
            try {
                const response = await fetch('/trade/trades');
            
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const data = await response.json();
                //const allTrades = data.map(trade => trade.tradeGive);
                setAllTrades(data);
            } catch(error) {
                console.error("There was a problem with the All Trades fetch: ", error)
            }
        };

        getAllTrades();
    }, []);

    useEffect(() => {
        const fetchTradeImages = async () => {
        const images = await Promise.all(allTrades.map(async (trade) => ({
            tradeGiveImage: await fetchCardImage(trade.tradeGive),
            tradeTakeImage: await fetchCardImage(trade.tradeTake)
        })));
        setTradeImages(images);
        };

        fetchTradeImages();
    }, [allTrades]);

    return (
        <div className="Trade">
            <h2>Cards:</h2>
            <div className="cards">
                <ul>
                    {cards.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
            <h2>Trades:</h2>
            <div className="allTrades">
                <ul className="trade-list">
                    {tradeImages.map((trade, index) => (
                        <li key={index}>
                            <div className="trade-container">
                                <div className="image-container">
                                    <span className="trade-label">Trading:</span>
                                    <img src={trade.tradeGiveImage} alt="Trade Give" className="trade-image" />
                                </div>
                                <div className="image-container">
                                    <span className="trade-label">Offering:</span>
                                    <img src={trade.tradeTakeImage} alt="Trade Take" className="trade-image" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Trade