const quoteElement = document.querySelector('q');
const authorElement = document.querySelector('figcaption');
const newQuoteBtn = document.createElement('button');
newQuoteBtn.textContent = 'New Quote';

newQuoteBtn.addEventListener('click', fetchQuote);

async function fetchQuote() {
    try {
        const response = await fetch ('https://thatsthespir.it/api');
        const data = await response.json();
        console.log(data)
        const quote = data.quote;
        const author = data.author;

        quoteElement.textContent = quote;
        authorElement.textContent = `- ${author}`;
    }
    catch (error) {
        console.log('An error has occured', error)
    }
}

quoteElement.parentNode.insertBefore(newQuoteBtn, quoteElement);

fetchQuote();