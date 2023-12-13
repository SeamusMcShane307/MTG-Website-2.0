// List of card identifiers or URIs
const cardIdentifiers = [
    'Black Lotus', // Replace these with actual card IDs or URIs
    'Time Walk',
    // ... Add more card identifiers
];

// Constructing the request body
const requestBody = {
    identifiers: cardIdentifiers.map(name => ({ name })),
    // Other optional parameters can be added here, like 'format' or 'face'
};

// Sending a POST request to Scryfall's batch card endpoint
fetch('https://api.scryfall.com/cards/collection', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    return response.json();
})
.then(data => {
    data.data.forEach(card => {
        console.log(card.oracle_text); // Process the received data

    })
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
