const cardName = "Black Lotus";  // Replace with the card name you're interested in

// URL for the Scryfall API endpoint
const apiUrl = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`;

// Make the API request using the fetch function
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON in the response
  })
  .then(data => {
    // Handle the data from the API response
    console.log(data.oracle_text);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
