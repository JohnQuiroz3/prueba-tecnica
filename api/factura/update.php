<?php
require("../database.php");

$json = file_get_contents('php://input');

$params = json_decode($json);

$con = connect();

mysqli_query($con,"update factura set fecha='$params->fecha', idcliente=$params->cliente, total=$params->total where numero=$params->numero");

class Result {}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Datos actualizados';

header('Content-Type: application/json');
echo json_encode($response);  
?>