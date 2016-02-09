<html>
    <head>
        <title>My Tetrisy Game</title>
        <link rel="stylesheet" type="text/css" href="//tetris-world-jasonrc83.c9users.io/CSS/Tetrisy.css">
        <script type="text/javascript" src="//tetris-world-jasonrc83.c9users.io/JS/GameStart.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    </head>

    <body class="background" onload='startGame()'>
        <div class='Title'>
            <h1 class='gameTitle'>My Tetrisy Game</h1>
        </div>
        <div class="outer_border">
            <div class="inner_border">
                <canvas id="game_play_board"></canvas>
            </div>
            <div class="next_piece">
                <span class='show_next'>Next Piece</span>
                <canvas id="show_next_piece"></canvas>
            </div>
            <div class="show_score">
                <span class='your_score'>Current Score</span>
                <span class="scoreboard">0 Points</span>
            </div>
        </div>
    </body>
</html>