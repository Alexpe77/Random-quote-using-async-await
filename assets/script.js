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
        const imageUrl = data.photo;

        if (imageUrl) {
            imgElement.src = imageUrl;
        } else {
            imgElement.src = './assets/img/cat.jpg';
        }

        quoteElement.textContent = quote;
        authorElement.textContent = `- ${author}`;
    }
    catch (error) {
        console.log('An error has occured', error)
    }
}

fetchQuote();