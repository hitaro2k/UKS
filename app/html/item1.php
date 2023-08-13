<!DOCTYPE html>
<html>
<head>
  <title>Товар</title>
</head>
<body>
  <?php
    $name = isset($_GET['name']) ? $_GET['name'] : 'Гость';
    echo "<h1>Товар для: $name</h1>";
  ?>
</body>
</html>
