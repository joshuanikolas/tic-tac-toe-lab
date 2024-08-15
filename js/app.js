/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll('.sqr')
        console.log(squareEls)

const messageEl = document.getElementById('message')
        console.log(messageEl)

const resetBtnEl = document.getElementById('reset')
        console.log(resetBtnEl)

const winningCombo = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5 ,8],
[0, 4, 8],
[2, 4, 6]
];
/*---------------------------- Variables (state) ----------------------------*/

let board = ['', '', '', '', '', '', '', '', ''];
let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = [
       '', '', '',
       '','', '',
       '', '', '',
    ]
        turn = 'X';
        winner = false;
        tie = false;
    render();
};
  console.log(init);

  const render = () => {
    updateBoard();
    updateMessage();
  };


  const updateBoard = () => {
      board.forEach((cell, index) => {
          squareEls[index].textContent = cell;
        });
  };
  console.log(updateBoard);


  const updateMessage = () =>  {
      if(!winner && !tie){
        messageEl.textContent=`It's ${turn}'s turn`;
    } else if (!winner && !tie) {
        messageEl.textContent = "It's a tie!";
    } else {
        message.textContent = `${winner} has won!`;
    };
  };


  const handleClick = (event) => {
    const clickedSquare = event.target;
    const squareIndex = parseInt(clickedSquare.id);
    if (board[squareIndex] !== '') return;

    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  };


  const placePiece = (index) => {
    board[index] = turn;
  };
  console.log(board)

  const checkForWinner = () => {
    winningCombo.forEach((combo) => {
      if (
        board[combo[0]] !== '' &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
      ) {
        winner = board[combo[0]]; 
  
      }
    });
  };   
console.log(winner)

  
    const checkForTie = () => {
      if (!winner && board.every(cell => cell !== '')) {
        tie = true;
      }
    };
    console.log(true)


  const switchPlayerTurn = () => {
    if (!winner) {
      turn = turn === 'X' ? 'O': 'X';
    }
  };
      console.log(turn)


  squareEls.forEach(square => {
   square.addEventListener('click', handleClick);
  });


resetBtnEl.addEventListener('click', init)

  init();

        
   




/*----------------------------- Event Listeners -----------------------------*/









//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
