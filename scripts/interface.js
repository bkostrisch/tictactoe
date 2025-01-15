function html() {
    let result = document.getElementById('result');
    let btt = document.getElementById('restart');
    let squares = document.querySelectorAll('.square');
    return { btt, result, squares };
}

document.addEventListener('DOMContentLoaded', () => {
     html().squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
            if (isWin() == false && gameDraw == true) {
                html().result.style.display='flex';
                html().result.innerHTML = `<h1>Draw!</h1>`;
            } else {
                html().result.style.display='flex';
                html().result.innerHTML += `<h1>Player ${playerTime} WIN the match ! </h1>`;
            }
            buttonJoin();
        }
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateTable() {
    html().squares.forEach((square) => {
        if (board[square.id] == '') {
            square.innerHTML = '';
        }
    });
}

function buttonJoin() {
    html().result.innerHTML += '<button id="reset_button" onclick="resetGame()">Play Again</button>';
 }