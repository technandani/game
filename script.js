const emojiPairs = [
  { emojis: ["🍏", "🍎"], name: "apple" },
  { emojis: ["🍌", "🍉"], name: "fruit" },
  { emojis: ["🐱", "🐶"], name: "animals" },
  { emojis: ["🏠", "🏡"], name: "house" },
  { emojis: ["🍕", "🍔"], name: "food" },
  { emojis: ["🍓", "🍒"], name: "berries" },
  { emojis: ["🌧️", "⛈️"], name: "weather" },
  { emojis: ["🚗", "🛵"], name: "vehicles" },
  { emojis: ["🍦", "🍪"], name: "desserts" },
  { emojis: ["🦁", "🐯"], name: "big cats" },
  { emojis: ["🎩", "👗"], name: "fashion" },
  { emojis: ["⚽", "🏀"], name: "sports" },
  { emojis: ["🎶", "🎸"], name: "music" },
  { emojis: ["🌍", "🌎"], name: "earth" },
  { emojis: ["🎮", "🕹️"], name: "gaming" },
  { emojis: ["🍔", "🍟"], name: "fast food" },
  { emojis: ["🎂", "🍰"], name: "cake" },
  { emojis: ["🎁", "🎉"], name: "celebration" },
  { emojis: ["🧳", "✈️"], name: "travel" },
  { emojis: ["🦋", "🌸"], name: "nature" },
  { emojis: ["⚡", "🔥"], name: "elements" },
  { emojis: ["🖥️", "💻"], name: "technology" },
];

let currentEmojiIndex = 0;
let score = 0;
function updateEmoji() {
  currentEmojiIndex = Math.floor(Math.random() * emojiPairs.length);
  const currentEmojis = emojiPairs[currentEmojiIndex].emojis;
  document.getElementById("emoji").textContent =
    currentEmojis.join(" ");
}
function checkGuess() {
  const userInput = document
    .getElementById("emoji-input")
    .value.toLowerCase();
  const currentPair = emojiPairs[currentEmojiIndex];

  if (userInput === currentPair.name) {
    score++;
    document.getElementById("message").textContent = "Correct! 🎉";
  } else {
    score--;
    document.getElementById(
      "message"
    ).textContent = `Wrong! The correct answer was "${currentPair.name}".`;
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("emoji-input").value = "";
  updateEmoji();
}
updateEmoji();