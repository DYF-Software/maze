function resizeCanvas() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight - 100; // Hamle sayısı için yer bırak

    // Labirentin oranlarını koruyarak ekran boyutuna en uygun ölçeği hesapla
    const scaleFactor = Math.min(screenWidth / (maze[0].length * tileSize), screenHeight / (maze.length * tileSize));

    // Yeni hücre boyutunu belirle
    scaledTileSize = Math.max(15, Math.floor(tileSize * scaleFactor)); // Minimum 15px

    // Canvas boyutlarını güncelle
    canvas.width = scaledTileSize * maze[0].length;
    canvas.height = scaledTileSize * maze.length;

    // Hamle sayısının boyutunu da dinamik yap
    const movesDisplay = document.getElementById("movesLeftDisplay");
    if (movesDisplay) {
        movesDisplay.style.fontSize = `${Math.max(14, scaledTileSize / 1.5)}px`;
        movesDisplay.style.padding = `${Math.max(6, scaledTileSize / 6)}px ${Math.max(10, scaledTileSize / 4)}px`;
    }
    
    drawMaze(); // Labirenti tekrar çiz
    console.log("Canvas boyutları güncellendi", canvas.width, canvas.height);
}
console.log("responsive.js yüklendi");
// Pencere boyutu değiştiğinde canvas'ı tekrar boyutlandır
window.addEventListener("resize", resizeCanvas);

// Sayfa yüklendiğinde ilk ayarlamayı yap
window.addEventListener("load", resizeCanvas);
