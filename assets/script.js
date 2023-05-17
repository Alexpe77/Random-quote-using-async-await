const quoteElement = document.querySelector('q');
const authorElement = document.querySelector('figcaption');
const imgElement = document.getElementById('quoteImage');

const newQuoteBtn = document.getElementById('newQuoteBtn');
newQuoteBtn.addEventListener('click', fetchQuote);

async function fetchQuote() {
    try {
        const response = await fetch ('https://thatsthespir.it/api');
        const data = await response.json();
        
        const quote = data.quote;
        const author = data.author;
        const source = data.source;
        const imageUrl = data.photo;

        quoteElement.textContent = quote;
        authorElement.textContent = `- ${author}`;
        imgElement.src = imageUrl;
    }
    catch (error) {
        console.log('An error has occured', error)
    }
}

fetchQuote();