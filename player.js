// Define player information including souls
const player = {
  name: "Fallen King",
  hp: 100,
  souls: 0, // Initialize souls
};

// Function to update player info including souls
function updatePlayerInfo() {
  document.getElementById("player-name").innerText = player.name;
  document.getElementById("player-hp").innerText = player.hp;
  document.getElementById("player-souls").innerText = player.souls; // Update souls
  // You can add more properties here as needed
}

// Example function to add souls
function addSouls(amount) {
  player.souls += amount;
  updatePlayerInfo(); // Update player info after adding souls
}
