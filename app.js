// console.log('Connected to server')

const button = document.getElementById('button');
const paragraph = document.getElementById('quote');
const author = document.getElementById('author');

//create a async function that will display the quote

async function getQuote() {
    try { 
        const response = await fetch('https://type.fit/api/quotes');    
        const jsonQuote = await response.json();
        let randomNum = Math.floor(Math.random() * Object.keys(jsonQuote).length);
        paragraph.innerHTML = jsonQuote[randomNum].text;
        button.textContent = 'Get Another Quote';
        if ( jsonQuote[randomNum].author) {
            author.innerHTML = '-' + jsonQuote[randomNum].author;
        } else {
            author.innerHTML = '-No Author';
        }
    } catch (error) {
        console.log(error);
    }
};

button.onclick = getQuote;



