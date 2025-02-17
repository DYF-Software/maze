// function resizeCanvas() {
//     const screenWidth = window.innerWidth;
//     const screenHeight = window.innerHeight - 100;

//     const scaleFactor = Math.min(screenWidth / (maze[0].length * tileSize), screenHeight / (maze.length * tileSize));

//     scaledTileSize = Math.max(15, Math.floor(tileSize * scaleFactor));

//     canvas.width = scaledTileSize * maze[0].length;
//     canvas.height = scaledTileSize * maze.length;

//     // Canvas'ı ortalamak için sol ve üst kenardan hizala
//     canvas.style.position = "absolute";
//     canvas.style.left = "50%";
//     canvas.style.top = "50%";
//     canvas.style.transform = "translate(-50%, -50%)";

//     const movesDisplay = document.getElementById("movesLeftDisplay");
//     if (movesDisplay) {
//         movesDisplay.style.fontSize = `${Math.max(14, scaledTileSize / 1.5)}px`;
//         movesDisplay.style.padding = `${Math.max(6, scaledTileSize / 6)}px ${Math.max(10, scaledTileSize / 4)}px`;
//     }

//     drawMaze();
//     console.log("Canvas boyutları güncellendi", canvas.width, canvas.height);
// }


// console.log("responsive.js yüklendi");
// // Pencere boyutu değiştiğinde canvas'ı tekrar boyutlandır
// window.addEventListener("resize", resizeCanvas);

// // Sayfa yüklendiğinde ilk ayarlamayı yap
// window.addEventListener("load", resizeCanvas);
