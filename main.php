<!DOCTYPE html>
<html>
<head>
	<title>Valorant Guesser</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>Welcome to Valorant Guesser!</h1>
	<p>Try to guess the correct answers to each question to become a game genius.</p>
	<div id="question"></div>
	<div id="guess"></div>
	<button onclick="checkAnswer()">Submit</button>
	<div id="result"></div>
	<div id="score"></div>
	<div id="highscores">
		<?php include 'highscores.php'; ?>
	</div>
	<script src="script.js"></script>
</body>
</html>
