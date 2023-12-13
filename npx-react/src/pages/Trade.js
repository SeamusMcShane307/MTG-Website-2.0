import { useEffect, useState } from "react"

const Trade = () => {
    const [cards, setCards] = useState([])
    

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
                const names = data.data.map(card => card.name);
                setCards(names);
            } catch(error) {
                console.error("There was a problem with the fetch operation: ", error)
            }
        };

        fetchCards()
    }, []);

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
        </div>
    )
}

export default Trade



// const cardName = "Black Lotus";  // Replace with the card name you're interested in

// // URL for the Scryfall API endpoint
// const apiUrl = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`;

// // Make the API request using the fetch function
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); // Parse the JSON in the response
//   })
//   .then(data => {
//     // Handle the data from the API response
//     console.log(data.oracle_text);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('Error:', error);
//   });