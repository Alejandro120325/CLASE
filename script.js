const quotes = [
    { text: "No importa lo difícil o imposible que sea, nunca pierdas de vista tu objetivo.", author: "Monkey D. Luffy" },
    { text: "¿Acaso el mundo no es hermoso? A pesar de todo, sigue siéndolo.", author: "Guts" },
    { text: "No todos los que se esfuerzan tienen éxito. Pero todos los que han tenido éxito se han esforzado.", author: "Kamogawa Genji" },
    { text: "Incluso si nos obligan a retroceder, ¡nunca nos rendiremos!", author: "Makunouchi Ippo" },
    { text: "El poder no está determinado por tu tamaño, sino por el tamaño de tu corazón y tus sueños.", author: "Monkey D. Luffy" }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Transición de opacidad
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    setTimeout(() => {
        quoteText.textContent = `"${selectedQuote.text}"`;
        quoteAuthor.textContent = `- ${selectedQuote.author}`;

        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 300);
});