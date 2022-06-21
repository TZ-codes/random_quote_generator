// console.log('Connected to server')

const button = document.getElementsByClassName('button');
const paragraph = document.getElementsByClassName('quote');

//create a async function that will display the quote

async function getQuote() {
    try { 
        const response = await fetch('https://type.fit/api/quotes');
        
        if (response.ok) {
            const jsonQuote = await response.json();
            let randomNum = Math.floor(Math.random() * Object.keys(jsonQuote).length);
            return jsonQuote[randomNum];
        }
    } catch (error) {
        console.log(error);
    }
};

const showQuote = (event) => {
    event.innerHTML = getQuote;
}; 

const variant = getQuote();
const text = variant.text;
const author = variant.author;
console.log(author);
console.log(text);
console.log(typeof variant);

button.onclick = showQuote;


