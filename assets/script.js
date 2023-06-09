const quoteElement = document.querySelector('p');
const authorElement = document.querySelector('figcaption');
const imgElement = document.getElementById('quoteImage');
const loader = document.getElementById('loader');
const newQuoteBtn = document.getElementById('newQuoteBtn');
newQuoteBtn.addEventListener('click', fetchQuote);

async function fetchQuote() {
    try {
        loader.style.display = 'block';

        const response = await fetch ('https://thatsthespir.it/api');
        const data = await response.json();
        
        const quote = data.quote;
        const author = data.author;
        const imageUrl = data.photo;

        let authorAge = 'Unknown';
 
        imgElement.src = imageUrl || './assets/img/cat.jpg';
        
        quoteElement.textContent = quote;
        authorElement.textContent = `- ${author}`;

        const ageResponse = await fetch(`https://randomuser.me/api/?name=${encodeURIComponent(author)}`, {
            mode: 'cors'
          });
          const ageData = await ageResponse.json();
          const ageResults = ageData.results;
          if (ageResults.length > 0) {
            authorAge = ageResults[0].dob.age || 'Unknown';
          }

        document.querySelector('#authorAge').textContent = `Age: ${authorAge} years old`;

        loader.style.display = 'none';
    }
    catch (error) {
        console.log('An error has occured', error)
    }
}

fetchQuote();