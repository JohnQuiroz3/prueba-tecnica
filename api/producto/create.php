<?php
require("../database.php");

$json = file_get_contents('php://input');

$params = json_decode($json);

$con = connect();

$respuesta = mysqli_query($con,"insert into producto values($params->id,'$params->nombre',$params->inventario,$params->compra,$params->venta)");

class Result {}
$response = new Result();
if($respuesta){
	$response -> resultado = 'OK';
	$response -> validacion = true;
	$response -> mensaje = 'Datos grabados';
}
else{
	$response -> resultado = 'ERROR';
	$response -> validacion = false;
	$response -> mensaje = 'Ocurrió un error';
}

header('Content-Type: application/json');
echo json_encode($response);
?>