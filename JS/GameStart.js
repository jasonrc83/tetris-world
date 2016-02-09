var score = 0;
var gmBrdCnvs;
var gmBrdCtx;
var nxtPieceCnvs;
var nxtPieceCtx;
var pieceChoice;
var boardArray = new Array(14); // This will keep track of the board for pieces that have hit the bottom
for (var i = 0; i < boardArray.length; i++) {
    boardArray[i] = new Array(34); // This makes it a 2 dimensuional array
}

function startGame() {
    gmBrdCnvs = document.getElementById("game_play_board"); //get canvas for playing the game
    nxtPieceCnvs = document.getElementById("show_next_piece"); //get canvas for showing next piece
    nxtPieceCnvs.setAttribute('width', '180'); //set canvas width
    nxtPieceCnvs.setAttribute('height', '180'); //set canvas height
    nxtPieceCtx = nxtPieceCnvs.getContext("2d"); //get next piece canvas context
    gmBrdCnvs.setAttribute('width', '420'); //set game board width
    gmBrdCnvs.setAttribute('height', '666'); // set game board height
    gmBrdCtx = gmBrdCnvs.getContext("2d"); //get next piece canvas context
    selectNextPiece(gmBrdCtx, gmBrdCnvs.width, gmBrdCnvs.height); // Generates the first piece to be sent to the game
    startTimer();//Starts the game
    selectNextPiece(nxtPieceCtx, nxtPieceCnvs.width, nxtPieceCnvs.height);// Generates the first piece for the "Next Piece" area
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
    
}

function rotatePiece () {
    gmBrdCtx.clearRect(0, 0, gmBrdCnvs.width, gmBrdCnvs.height);
    switch (pieceChoice) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
    }
}