import { useEffect, useState } from "react"

const Trade = () => {
    const [cards, setCards] = useState(null)
    const cardName = 'Black Lotus';
    //const scryfallAPI = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`;

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`)
            const json = await response.json()

            if (response.ok) {
                setCards(json)
                console.log(json)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="Trade">
            <div className="cards">
                {cards && cards.map((card) => (
                    <p key={card._id}>{card.name}</p>
                ))}
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