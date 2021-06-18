<?php
require("../database.php");

$json = file_get_contents('php://input');

$params = json_decode($json);
$producto = $_GET['producto'];

$con = connect();

mysqli_query($con,"update detalle_factura set idproducto=$params->idproducto, cantidad=$params->cantidad, totalproducto=$params->totalproducto where idfactura=$params->idfactura and idproducto=$producto");

class Result {}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Datos actualizados';

header('Content-Type: application/json');
echo json_encode($response);  
?>