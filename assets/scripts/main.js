document.addEventListener("DOMContentLoaded", function () {
    const maze = document.getElementById("maze");
    const clearButton = document.getElementById("clearButton");

    for (let i = 1; i <= 64; i++) {
        let cell = document.createElement("div");
        cell.textContent = i;
        cell.classList.add("maze-cell");
        cell.addEventListener("click", function () {
            cell.style.opacity = "0";
        });
        maze.appendChild(cell);
    }

    // Clear all maze squares when button is clicked
    clearButton.addEventListener("click", function () {
        document.querySelectorAll(".maze-cell").forEach(cell => {
            cell.style.opacity = "0";
        });
    });
});
