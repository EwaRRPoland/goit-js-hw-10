// Funkcja fetchCountries wysyła żądanie HTTP do interfejsu API Rest Countries
// i zwraca obietnicę z tablicą krajów jako wynik żądania.

async function fetchCountries(name) {
    try {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`);
        if (!response.ok) {
            throw new Error('Oops, there is no country with that name');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default fetchCountries;
