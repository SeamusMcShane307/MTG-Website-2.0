import axios from 'axios';

export const fetchCardImage = async (searchTerm) => {
    try {
        const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${searchTerm}`);
        const cardData = response.data;
        return cardData.image_uris?.normal || '';
    } catch (error) {
        console.error('Error fetching card image:', error);
        return '';
    }
};

