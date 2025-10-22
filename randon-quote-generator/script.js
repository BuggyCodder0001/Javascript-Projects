const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you; you have to go out and get it.",
  "Sometimes later becomes never. Do it now.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination, go to bed with satisfaction.",
  "If you want to achieve greatness, stop asking for permission.",
  "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
  "Your limitation—it’s only your imagination.",
  "Make each day your masterpiece. – John Wooden",
  "The secret of getting ahead is getting started. – Mark Twain"
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click' , () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
})