var Quotes = [
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },

    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },

    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },

    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },

    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },

    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },];


function Quote() {
    var genarat = parseInt(Math.random() * Quotes.length);
    document.getElementById('fristQuote').textContent = `"${Quotes[genarat].quote}"`;
    document.getElementById('scondQuote').textContent = `--${Quotes[genarat].author}`;}

