const players = [
  {
    name: "Virat Kohli",
    image: "images/kohli.jpeg",
    matches: 250,
    strikeRate: "137.8",
    jersey: 18,
    best: "94* vs WI"
  },
  {
    name: "Jasprit Bumrah",
    image: "images/bumrah.jpeg",
    matches: 120,
    strikeRate: "N/A",
    jersey: 93,
    best: "5/7 vs SL"
  },
  {
    name: "MS Dhoni",
    image: "images/dhoni.jpeg",
    matches: 350,
    strikeRate: "126.13",
    jersey: 7,
    best: "183* vs SL"
  },
  {
    name: "Rohit Sharma",
    image: "images/rohit.jpeg",
    matches: 240,
    strikeRate: "139.97",
    jersey: 45,
    best: "264 vs SL"
  },
  {
    name: "Mohammad Siraj",
    image: "images/siraj.jpeg",
    matches: 70,
    strikeRate: "N/A",
    jersey: 73,
    best: "6/15 vs SL"
  }
];

const grid = document.getElementById("teamGrid");

players.forEach((player, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}" />
    <h3>${player.name}</h3>
  `;
  card.onclick = () => showModal(index);
  grid.appendChild(card);
});

function showModal(index) {
  const p = players[index];
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalMatches").textContent = p.matches;
  document.getElementById("modalStrikeRate").textContent = p.strikeRate;
  document.getElementById("modalJersey").textContent = p.jersey;
  document.getElementById("modalBest").textContent = p.best;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
