// Function to perform player's attack
function playerAttack() {
  const playerDamage = calculateDamage();
  const enemyHPElement = document.getElementById("enemy-hp");

  // Update enemy's HP
  let currentEnemyHP = parseInt(enemyHPElement.innerText);
  currentEnemyHP -= playerDamage;
  enemyHPElement.innerText = Math.max(0, currentEnemyHP); // Prevent negative health

  logAttack(player.name, randomEnemy.name, playerDamage);

  // Check for enemy defeat
  if (currentEnemyHP <= 0) {
    const soulsGained = Math.abs(currentEnemyHP); // Calculate souls gained from negative health
    addSouls(soulsGained); // Give the player souls
    logElement.innerHTML += `<p>You defeated ${randomEnemy.name} and gained ${soulsGained} souls!</p>`;
    document.getElementById("actions").innerHTML = "";
    return; // Exit attack function early
  }
}

// Function to perform enemy's attack
function enemyAttack() {
  const enemyDamage = calculateDamage();
  const playerHPElement = document.getElementById("player-hp");

  // Update player's HP
  let currentPlayerHP = parseInt(playerHPElement.innerText);
  currentPlayerHP -= enemyDamage;
  playerHPElement.innerText = Math.max(0, currentPlayerHP); // Prevent negative health

  logAttack(randomEnemy.name, player.name, enemyDamage);

  // Check for player defeat
  if (currentPlayerHP <= 0) {
    logElement.innerHTML += `<p>You were defeated!</p>`;
    document.getElementById("actions").innerHTML = "";
    return; // Exit attack function early
  }
}

// Function to calculate damage
function calculateDamage() {
  return Math.floor(Math.random() * 10) + 1;
}

// Load player information
updatePlayerInfo();

// Load enemy information
const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
document.getElementById("enemy-name").innerText = randomEnemy.name;
document.getElementById("enemy-hp").innerText = randomEnemy.hp;

// Load weapons information
const weaponsList = document.getElementById("weapons-list");
weapons.forEach(weapon => {
  const li = document.createElement("li");
  li.textContent = `${weapon.name} (Damage: ${weapon.damage})`;
  weaponsList.appendChild(li);
});
