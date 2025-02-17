const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

// Labirentin tam görünmesi için boyutları ayarla
const tileSize = 30;
canvas.width = 20 * tileSize; // Labirentin genişliği
canvas.height = 16 * tileSize; // Labirentin yüksekliği

const maxMoves = 51;
let movesLeft = maxMoves;

// Hamle sayısını göstermek için HTML elemanı ekleyelim
let movesDisplay = document.getElementById("movesLeftDisplay");
if (!movesDisplay) {
    movesDisplay = document.createElement("div");
    movesDisplay.id = "movesLeftDisplay";
    document.body.appendChild(movesDisplay);
}

const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let player = { x: 1, y: 1 };
let exit = { x: 18, y: 15 };

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            ctx.fillStyle = maze[row][col] === 1 ? "black" : "orange";
            ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
            ctx.strokeRect(col * tileSize, row * tileSize, tileSize, tileSize);
        }
    }

    ctx.fillStyle = "#ff4500";
    ctx.fillRect(exit.x * tileSize, exit.y * tileSize, tileSize, tileSize);

    ctx.font = "24px Arial";
    ctx.fillStyle = "#ffa500";
    ctx.fillText("⭐", player.x * tileSize + 5, player.y * tileSize + 25);

    updateMovesDisplay();
}

function movePlayer(dx, dy) {
    if (movesLeft <= 0) return;

    let newX = player.x + dx;
    let newY = player.y + dy;

    if (maze[newY][newX] === 0 || (newX === exit.x && newY === exit.y)) { 
        player.x = newX;
        player.y = newY;
        movesLeft--;
        updateMovesDisplay();
    }

    drawMaze();

    if (player.x === exit.x && player.y === exit.y) {
        setTimeout(() => alert("Tebrikler! Labirenti tamamladınız!"), 10);
    } else if (movesLeft <= 0) {
        setTimeout(() => alert("Kaybettiniz! Hamle hakkınız bitti."), 10);
    }
}

function updateMovesDisplay() {
    movesDisplay.innerHTML = `Kalan Hamle: ${movesLeft}`;
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp": movePlayer(0, -1); break;
        case "ArrowDown": movePlayer(0, 1); break;
        case "ArrowLeft": movePlayer(-1, 0); break;
        case "ArrowRight": movePlayer(1, 0); break;
    }
});

drawMaze();
