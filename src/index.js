import fetchCountries from './fetchCountries'; // Import funkcji fetchCountries z pliku fetchCountries.js
const searchBox = document.getElementById('search-box');
let timeoutId;

// Funkcja debounce
function customDebounce(callback, delay) {
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

// Obsługa zdarzenia input w polu wyszukiwania
searchBox.addEventListener('input', customDebounce(async (event) => {
    const countryList = document.getElementById('country-list');
    const countryInfo = document.getElementById('country-info');
    const searchTerm = event.target.value.trim();

    if (searchTerm) {
        try {
            const countries = await fetchCountries(searchTerm);

            if (countries.length === 0) {
                // Wyświetl komunikat o braku wyników
                countryList.innerHTML = 'Oops, there is no country with that name.';
                countryInfo.innerHTML = '';
            } else if (countries.length > 10) {
                // Wyświetl komunikat o zbyt wielu wynikach
                countryList.innerHTML = 'Too many matches found. Please enter a more specific name.';
                countryInfo.innerHTML = '';
            } else {
                // Wyświetl listę krajów
                countryList.innerHTML = countries.map(country => `<div>${country.name}</div>`).join('');
                countryInfo.innerHTML = '';
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Wyświetl komunikat o błędzie
            countryList.innerHTML = 'An error occurred. Please try again later.';
            countryInfo.innerHTML = '';
        }
    } else {
        // Wyczyszczanie wyników
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
    }
}, 300)); // Debounce na 300ms
