<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Formulario</title>
</head>
<body>
    <form action="" method="post">
        <label for="nombAmbito">Nombre ámbitos</label>
        <div id="contenedor">
            <input type="text" name="nombAmbito[]">
        </div>
        <button type="button" id="añadir">+</button>
        <input type="submit">
    </form>
    <script src="script.js"></script>
</body>
</html>
