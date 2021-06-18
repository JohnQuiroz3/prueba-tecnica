<?php
require("../database.php");

$con = connect();

mysqli_query($con,"delete from cliente where identificacion = $_GET[identificacion]");

class Result {}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Dato borrado';

header('Content-Type: application/json');
echo json_encode($response);
?>