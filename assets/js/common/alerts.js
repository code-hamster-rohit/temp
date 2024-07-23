const quotes = ['"The only way to do great work is to love what you do." - Steve Jobs', '"The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb', '"The best revenge is massive success." - Frank Sinatra', '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt', '"The best way to predict the future is to invent it." - Alan Kay', '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." - Helen Keller',]

const alerts = document.querySelectorAll('.alert');
window.addEventListener('DOMContentLoaded', () => {
    alerts.forEach(alert => alert.textContent = quotes[Math.floor(Math.random() * quotes.length)]);
    setInterval(() => {
        alerts.forEach(alert => alert.textContent = quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
});

if (window.innerWidth <= 680){
    const mobAlert = document.querySelector('.mobile-alert-wrapper');
    mobAlert.classList.toggle('hidden');
    const desktopAlert = document.querySelector('.alerts-wrapper');
    desktopAlert.classList.toggle('hidden');
}
