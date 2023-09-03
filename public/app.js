// Initialize variables and game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let gameEnded = false; // Initialize gameEnded variable

// Winning conditions
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if (cells[index] || gameEnded) return; // Check if cell is already occupied or the game has ended.

    element.textContent = currentPlayer;
    cells[index] = currentPlayer;

    // Check for a win
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            result.textContent = `Player ${currentPlayer} wins!`;
            gameEnded = true;
            return;
        }
    }

    // Check for a draw
    if (cells.every(cell => cell !== '')) {
        result.textContent = "It's a draw!";
        gameEnded = true;
        return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    result.textContent = `Player ${currentPlayer}'s Turn`;
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = `Player ${currentPlayer}'s Turn`;
    btns.forEach(btn => {
        btn.textContent = '';
    });
    gameEnded = false; // Reset gameEnded
};

// Attach event listeners to the buttons
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        ticTacToe(btn, i);
    });
});

// Attach event listener to the reset button
document.querySelector('#reset-button').addEventListener('click', resetGame);
