<?php

require_once( 'functions.php' );

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dino Dash Game</title>
    <link rel="stylesheet" href="game.css"></head>
<body>
    <div id="gameContainer">
        <div id="gameOver"></div>
        <button id="leaderboard" class="button button4"><a href="game.php">Go to Game</a></button>
        <div class="scoreboard">
            <table>
                <tr>
                    <th>Position</th>
                    <th>Player Name</th>
                    <th>Score</th>
                </tr>

                <?php
                $current_scores = get_scores();
                if( ! empty( $current_scores ) && is_array( $current_scores ) ) {

                    foreach ( $current_scores as $position => $value ) {
                       $html = '<tr>';
                       $html .= '<th>' . ++$position . '</th>';
                       $html .= '<th>' . $value[ "player" ] . '</th>';
                       $html .= '<th>' . $value[ "score" ] . '</th>';
                       $html .= '</tr>';
                       echo $html;
                    }
                }
                ?>
            </table>
        </div>
    </div>
</body>
</html>