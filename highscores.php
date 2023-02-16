<?php

// Connect to the database
$dsn = "mysql:host=localhost;dbname=ValorantGuesser";

try {
  $pdo = new PDO($dsn);
} catch (PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}

// Retrieve the high scores from the database
$stmt = $pdo->query("SELECT * FROM highscores ORDER BY score DESC");

// Display the high scores as a table
echo "<h2>High Scores</h2>";
echo "<table>";
echo "<tr><th>Name</th><th>Score</th></tr>";
while ($row = $stmt->fetch()) {
  echo "<tr><td>{$row['name']}</td><td>{$row['score']}</td></tr>";
}
echo "</table>";

$pdo = null;

?>
