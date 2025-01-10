<?php
// Verificar si se enviaron los datos
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'] ?? '';
    $email = $_POST['email'] ?? '';

    // Validar los datos (básico)
    if (!empty($nombre) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Simula un procesamiento, como guardar en una base de datos
        echo "Datos recibidos: Nombre - $nombre, Email - $email";
    } else {
        echo "Error: Datos inválidos";
    }
} else {
    echo "Error: Solo se permite el método POST";
}
?>
