let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0;
playerTime = setPlayer();
let symbols = ['o', 'x'];
let gameOver = false;
let gameDraw = false;
let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];  

function handleMove(position) {

    if(gameOver){
        return;
    }

    if (board[position] == '') {

        board[position] = symbols[playerTime];   
        gameOver = isWin();
        gameDraw = isDraw();

        if(gameDraw == true) {
            gameOver = true;
        }
        
        if(gameOver == false){     
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver;
}

function isWin() {
    

    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if((board[pos1] == board[pos2]) && (board[pos1] == board[pos3]) && (board[pos1] != '')){
            return true;
        }
    }

    return false;
}

function setPlayer() {
    playerTime = parseInt(document.querySelector('input[name=Player-Start]:checked').value);
    return playerTime
}

function resetGame() {
    if (gameOver == true) {
        board = ['', '', '', '', '', '', '', '', ''];
        playerTime = setPlayer();
        updateTable();
        gameOver = false;
        html().result.innerHTML = ''
        html().result.style.display = 'none';
    }
    return { board, playerTime, gameOver };
}

function isDraw() {
    return board.every((table) => {
        return table != '';
    })
}