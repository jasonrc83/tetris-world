// Global Variables
var score = 0;
var gameWidth = 15;
var gameHeight = 32;
var gmBrdCnvs;
var gmBrdCtx;
var nxtPieceCnvs;
var __MOVEDOWN;
var __MOVELEFT;
var __MOVERIGHT;
var crntX;
var crntY;
var nxtPieceCtx;
var pieceChoice;
var isRotated = false;
var boardObject = {
    'row0' : {
        'column0' : {
            'value' : '0',
            'color' : 'darkgrey',
            'border' : 'darkgrey'
        }
    }
};
for (var i = 0; i < gameWidth; i++) {
    for (var j = 0; j < gameHeight; j++) {
        boardObject['row'+i]['column'+j]['value'] = 0;
        boardObject['row'+i]['column'+j]['color'] = darkgrey;
        boardObject['row'+i]['column'+j]['border'] = darkgrey;
    }
}
/*var boardArray = new Array(gameWidth); // This will keep track of the game pieces.
for (var i = 0; i < boardArray.length; i++) {
    boardArray[i] = boardObject; // This makes it a 2 dimensional array for moving up/down and left/right
    for (var j = 0; j < gameHeight; j++) {
        boardArray[i][j].value = 0; //0 = empty block, 1 = current block that is moving, 2 = locked block (set piece). If whole row is set to 2, row is removed and score is added.
        boardArray[i][j].color = darkgrey; //Saves color of block, particularly for locked pieces to show correctly when screen is redrawn.
        boardArray[i][j].border = darkgrey; //Saves border color of block.
    }
}*/

function startGame() { //initial setup of game and then starts timer
    gmBrdCnvs = document.getElementById("game_play_board"); //get canvas for playing the game
    nxtPieceCnvs = document.getElementById("show_next_piece"); //get canvas for showing next piece
    nxtPieceCnvs.setAttribute('width', '180'); //set canvas width
    nxtPieceCnvs.setAttribute('height', '180'); //set canvas height
    nxtPieceCtx = nxtPieceCnvs.getContext("2d"); //get next piece canvas context
    gmBrdCnvs.setAttribute('width', '420'); //set game board width
    gmBrdCnvs.setAttribute('height', '666'); // set game board height
    gmBrdCtx = gmBrdCnvs.getContext("2d"); //get next piece canvas context
   // selectNextPiece(gmBrdCtx, gmBrdCnvs.width, gmBrdCnvs.height); // Generates the first piece to be sent to the game
    selectNextPiece(nxtPieceCtx, nxtPieceCnvs.width, nxtPieceCnvs.height);// Generates the first piece for the "Next Piece" area
    startTimer();//Starts the game
}

function startTimer() {
    var myTimer = setInterval(Timer, 666); //Starts the games timer, which controls the movement of pieces
}

function Timer() {
    score++;
    $('.scoreboard').html(score+" Points");
}

function selectNextPiece(CanvasCtx, cWidth, cHeight) {
    pieceChoice = Math.floor(Math.random() * 7); // Random number which decides the piece being used
    createPiece(pieceChoice, CanvasCtx, cWidth, cHeight); // Creates piece chosen by random generator and places it on given canvas context
}

function createPiece(shape, CanvasCtx, cWidth, cHeight) {
    CanvasCtx.clearRect(0, 0, cWidth, cHeight);
    isRotated = false;
    if (cHeight > 200) { //Makes sure pieces drop in at top of Game Board, instead of middle of the board.
        cHeight = 100;
    }
 //   shape = 0;
    switch (shape) { 
        case 0: //Square
            CanvasCtx.fillStyle = "#A2005C";
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2 - 20,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 - 20,20,20);
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2,20,20);
            CanvasCtx.lineWidth = 3;
            CanvasCtx.strokeStyle = "#DD007D";
            CanvasCtx.beginPath();
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2 - 20,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 - 20,20,20);
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2,20,20);
            CanvasCtx.stroke();
            CanvasCtx.closePath();
            break;
        case  1: //Line
            CanvasCtx.fillStyle = "#072189";
            CanvasCtx.fillRect(cWidth/2 - 10,cHeight/2 - 40,20,20);
            CanvasCtx.fillRect(cWidth/2 - 10,cHeight/2 - 20,20,20);
            CanvasCtx.fillRect(cWidth/2 - 10,cHeight/2,20,20);
            CanvasCtx.fillRect(cWidth/2 - 10,cHeight/2 + 20,20,20);
            CanvasCtx.lineWidth = 3;
            CanvasCtx.strokeStyle = "#6681ED";
            CanvasCtx.beginPath();
            CanvasCtx.rect(cWidth/2 - 10,cHeight/2 - 40,20,20);
            CanvasCtx.rect(cWidth/2 - 10,cHeight/2 - 20,20,20);
            CanvasCtx.rect(cWidth/2 - 10,cHeight/2,20,20);
            CanvasCtx.rect(cWidth/2 - 10,cHeight/2 + 20,20,20);
            CanvasCtx.stroke();
            CanvasCtx.closePath();
            break;
        case 2: //Z shape
            CanvasCtx.fillStyle = "#F83865";
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2 - 20,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 - 20,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2,20,20);
            CanvasCtx.fillRect(cWidth/2 + 20,cHeight/2,20,20);
            CanvasCtx.lineWidth = 3;
            CanvasCtx.strokeStyle = "#EF0038";
            CanvasCtx.beginPath();
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2 - 20,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 - 20,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2,20,20);
            CanvasCtx.rect(cWidth/2 + 20,cHeight/2,20,20);
            CanvasCtx.stroke();
            CanvasCtx.closePath();
            break;
        case 3: //T shape
            CanvasCtx.fillStyle = "#EFEF0D";
            CanvasCtx.fillRect(cWidth/2,cHeight/2 - 30,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 - 10,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 + 10,20,20);
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2 - 10,20,20);
            CanvasCtx.lineWidth = 3;
            CanvasCtx.strokeStyle = "#BABA04";
            CanvasCtx.beginPath();
            CanvasCtx.rect(cWidth/2,cHeight/2 - 30,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 - 10,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 + 10,20,20);
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2 - 10,20,20);
            CanvasCtx.stroke();
            CanvasCtx.closePath();
            break;
        case 4: //J shape
            CanvasCtx.fillStyle = "#F33300";
            CanvasCtx.fillRect(cWidth/2,cHeight/2 - 30,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 - 10,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 + 10,20,20);
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2 + 10,20,20);
            CanvasCtx.lineWidth = 3;
            CanvasCtx.strokeStyle = "#FF714B";
            CanvasCtx.beginPath();
            CanvasCtx.rect(cWidth/2,cHeight/2 - 30,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 - 10,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 + 10,20,20);
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2 + 10,20,20);
            CanvasCtx.stroke();
            CanvasCtx.closePath();
            break;
        case 5: //S shape
            CanvasCtx.fillStyle = "#32E1AC";
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 - 20,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2,20,20);
            CanvasCtx.fillRect(cWidth/2 + 20,cHeight/2 - 20,20,20);
            CanvasCtx.lineWidth = 3;
            CanvasCtx.strokeStyle = "#00BB82";
            CanvasCtx.beginPath();
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 - 20,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2,20,20);
            CanvasCtx.rect(cWidth/2 + 20,cHeight/2 - 20,20,20);
            CanvasCtx.stroke();
            CanvasCtx.closePath();
            break;
        case 6: //L shape
            CanvasCtx.fillStyle = "#00C200";
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2 - 30,20,20);
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2 - 10,20,20);
            CanvasCtx.fillRect(cWidth/2 - 20,cHeight/2 + 10,20,20);
            CanvasCtx.fillRect(cWidth/2,cHeight/2 + 10,20,20);
            CanvasCtx.lineWidth = 3;
            CanvasCtx.strokeStyle = "#007900";
            CanvasCtx.beginPath();
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2 - 30,20,20);
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2 - 10,20,20);
            CanvasCtx.rect(cWidth/2 - 20,cHeight/2 + 10,20,20);
            CanvasCtx.rect(cWidth/2,cHeight/2 + 10,20,20);
            CanvasCtx.stroke();
            CanvasCtx.closePath();
            break;
    }
}

function movePiece () {
    gmBrdCtx.clearRect(0, 0, gmBrdCnvs.width, gmBrdCnvs.height);
    var squareColor;
    for (var i = 0; i < gameWidth; i++) {  //Set the whole array to 0
        for (var j = 0; j < gameHeight; j++) {
            if (boardArray[i][j].value == 1) { //Checks if the location is current piece, if so, sets the color of the square.
                squareColor = boardArray[i][j].color; //Sets color for redraw of current pieces.
            }
            if (boardArray[i][j].value == 2) { //Checks if the location is a locked piece, if so, sets the color of the square.
                squareColor = boardArray[i][j].color; //Sets color for redraw of locked pieces.
            } else {
                squareColor = darkgrey;
            }
        }
    }
    switch (pieceChoice) {
        case 0: //Square
            break;
        case 1: //Line, 
            if (isRotated == true) { //Checks if piece has been rotated so that it moves correctly.
                
                
            } else { //Moves piece in non-rotated position
                
            }
            break;
        case 2: //Z shape, 
            if (isRotated == true) { //Checks if piece has been rotated so that it moves correctly.
                
                
            } else { //Moves piece in non-rotated position
                
            }
            break;
        case 3: //T shape, 
            if (isRotated == true) { //Checks if piece has been rotated so that it moves correctly.
                
                
            } else { //Moves piece in non-rotated position
                
            }
            break;
        case 4: //J shape, 
            if (isRotated == true) { //Checks if piece has been rotated so that it moves correctly.
                
                
            } else { //Moves piece in non-rotated position
                
            }
            break;
        case 5: //S shape, 
            if (isRotated == true) { //Checks if piece has been rotated so that it moves correctly.
                
                
            } else { //Moves piece in non-rotated position
                
            }
            break;
        case 6: //L shape, 
            if (isRotated == true) { //Checks if piece has been rotated so that it moves correctly.
                
                
            } else { //Moves piece in non-rotated position
                
            }
            break;
}

function rotatePiece () {
    gmBrdCtx.clearRect(0, 0, gmBrdCnvs.width, gmBrdCnvs.height);
    var squareColor;
    for (var i = 0; i < gameWidth; i++) {  //Set the whole array to 0
        for (var j = 0; j < gameHeight; j++) {
            if (boardArray[i][j].value == 1) { //Checks if the location is current piece, if so, sets the color of the square.
                squareColor = boardArray[i][j].color; //Sets color for redraw of current pieces.
            }
            if (boardArray[i][j].value == 2) { //Checks if the location is a locked piece, if so, sets the color of the square.
                squareColor = boardArray[i][j].color; //Sets color for redraw of locked pieces.
            } else {
                squareColor = darkgrey;
            }
        }
    }
    switch (pieceChoice) {
        case 0: //Square, so nothing needs to happen.
            break;
        case 1: //Line, 
            if (isRotated == true) { //Checks if piece has been rotated already, if so, reverts to standard position.
                isRotated = false;
                
            } else { //If Piece is not rotated, rotates the piece.
                
            }
            break;
        case 2: //Z shape, 
            if (isRotated == true) { //Checks if piece has been rotated already, if so, reverts to standard position.
                isRotated = false;
                
            } else { //If Piece is not rotated, rotates the piece.
                
            }
            break;
        case 3: //T shape, 
            if (isRotated == true) { //Checks if piece has been rotated already, if so, reverts to standard position.
                isRotated = false;
                
            } else { //If Piece is not rotated, rotates the piece.
                
            }
            break;
        case 4: //J shape, 
            if (isRotated == true) { //Checks if piece has been rotated already, if so, reverts to standard position.
                isRotated = false;
                
            } else { //If Piece is not rotated, rotates the piece.
                
            }
            break;
        case 5: //S shape, 
            if (isRotated == true) { //Checks if piece has been rotated already, if so, reverts to standard position.
                isRotated = false;
                
            } else { //If Piece is not rotated, rotates the piece.
                
            }
            break;
        case 6: //L shape, 
            if (isRotated == true) { //Checks if piece has been rotated already, if so, reverts to standard position.
                isRotated = false;
                
            } else { //If Piece is not rotated, rotates the piece.
                
            }
            break;
    }
}