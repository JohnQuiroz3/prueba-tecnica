<?php
require("../database.php");

$con = connect();

mysqli_query($con,"delete from detalle_factura where idfactura = $_GET[factura] and idproducto = $_GET[producto]");

class Result {}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Dato borrado';

header('Content-Type: application/json');
echo json_encode($response);
?>