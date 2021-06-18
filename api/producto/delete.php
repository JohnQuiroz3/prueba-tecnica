<?php
require("../database.php");

$con = connect();

mysqli_query($con,"delete from producto where id = $_GET[id]");

class Result {}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Dato borrado';

header('Content-Type: application/json');
echo json_encode($response);
?>