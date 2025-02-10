<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action="index.php?c=Recoger&m=add"  method="post">
        <label for="nombAmbito">Ambitos</label>
        <input type="text" name="nombAmbito[]">
        <button id="añadir">+</button>
        <input type="submit">
    </form>
    <script src="script.js"></script>
</body>
</html>