<?php
require("../database.php");

$con = connect();

mysqli_query($con,"delete from factura where numero = $_GET[numero]");

class Result {}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Dato borrado';

header('Content-Type: application/json');
echo json_encode($response);
?>