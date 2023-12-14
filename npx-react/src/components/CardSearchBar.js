import React, { useState, useEffect, useRef } from 'react';

export function AutocompleteSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
    const inputRef = useRef(null);

    useEffect(() => {
        const fetchSuggestions = async () => {
        if (searchTerm.trim() === '') {
            setSuggestions([]);
            return;
        }

        try {
            const response = await fetch(`https://api.scryfall.com/cards/autocomplete?q=${searchTerm}`);
            if (!response.ok) {
            throw new Error('Network response was not ok.');
            }

            const data = await response.json();
            setSuggestions(data.data ? data.data.slice(0,5) : []);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
        };

        fetchSuggestions();
    }, [searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([])
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setSelectedSuggestionIndex(prevIndex =>
                prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
        );
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setSelectedSuggestionIndex(prevIndex =>
                prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
        } else if (event.key === 'Enter' && selectedSuggestionIndex !== -1) {
            setSearchTerm(suggestions[selectedSuggestionIndex]);
            setSuggestions([]);
            inputRef.current.focus();
        }
    };

    return (
        <div className='autocomplete-container'>
            <h2>Card Search:</h2>
            <input
                type="text"
                className='card-search-bar'
                placeholder="Search for cards..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
            />
            <ul className='searchSuggestions'>
                {suggestions.map((suggestion, index) => (
                <li 
                    key={index} 
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={index === selectedSuggestionIndex ? 'selected' : ""}
                >
                    {suggestion}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default AutocompleteSearch;