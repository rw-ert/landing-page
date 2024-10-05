const players = [
    {
        name: "Virat Kohli",
        image: "https://via.placeholder.com/200",
        description: "Former captain and one of the best batsmen in the world.",
    },
    {
        name: "Rohit Sharma",
        image: "https://via.placeholder.com/200",
        description: "Current captain and explosive opener.",
    },
    {
        name: "Jasprit Bumrah",
        image: "https://via.placeholder.com/200",
        description: "Ace fast bowler known for his unique action.",
    },
    {
        name: "Ravindra Jadeja",
        image: "https://via.placeholder.com/200",
        description: "All-rounder known for his exceptional fielding.",
    },
    {
        name: "KL Rahul",
        image: "https://via.placeholder.com/200",
        description: "Versatile batsman and wicketkeeper.",
    },
];

function displayPlayers() {
    const playerList = document.getElementById('player-list');
    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <div class="player-info">
                <h2>${player.name}</h2>
                <p>${player.description}</p>
            </div>
        `;
        playerList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayPlayers);
