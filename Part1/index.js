const board = [];

function play(clickedId){
const playerSpan = document.getElementById('player')
const clickedElement = document.getElementById(clickedId);
if (playerSpan.innerText ==='X'){
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
} else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
    }
    console.log(board);
}

//board placements
const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

//combination
if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert (`${topLeft} is the winner`);
    // return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    // return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    // return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    // return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    // return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    // return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    // return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    // return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }





















































// const board = [];

// function play(clickedId){
//     const playerSpan = document.getElementById('player');
//     const clickedElement = document.getElementById(clickedId);

//     if (playerSpan.innerText === 'X'){
//         playerSpan.innerText = "O";
//         clickedElement.innerText = "X";
//         board[clickedId] = "X";
//     } else {
//         playerSpan.innerText = "X";
//         clickedElement.innerText = "0";
//         board[clickedId] = "0";
//     }
// }
// console.log(board);

// // board variables

// const topLeft = board[0];
// const topCenter = board[1];
// const topRight = board[2];
// const middleLeft = board[3];
// const middleCenter = board[4];
// const middleRight = board[5];
// const bottomLeft = board[6];
// const bottomCenter = board[7];
// const bottomRight = board[8];

// if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
//     alert(`${topLeft} is the winner`);
//     // return;
// }
// if (topRight !== undefined && topRight === bottomRight && topRight === bottomRight){
//     window.alert("Winner");
//     // return;
// }
// if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
//     window.alert("Winner");
//     // return;
// }
// if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
//     window.alert("Winner");
//     // return;
// }
// if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
//     window.alert("Winner");
//     // return;
// }
// if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
//     window.alert("Winner");
//     // return;
// }
// if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
//     window.alert("Winner");
//     // return;
// }
// if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
//     window.alert("Winner");
//     // return;
// }
// // the return statements are causing errors

// //if full
// let boardFull = true;
// for (let i = 0; i <= 8; i++){
//     if (board[i] === undefined) {
//         boardFull = false;
//     } 
//     if (boardFull === true){
//         alert("Cat's game!");
//     }
// }
// //reset
// function refresh(){
// window.location.reload()
// };

// //problem: won't alert winner, won't stop after board is full