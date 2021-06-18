<?php
require("../database.php");

$con = connect();
$vec = [];
if(array_key_exists("siguiente", $_GET)){
	$registros = mysqli_query($con,"select if(numero is null, 1, max(numero) + 1) as siguiente from factura;");
	if ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
elseif(array_key_exists("numero", $_GET)){
  $numero = $_GET['numero'];
  $registros = mysqli_query($con,"select a.numero as factura, a.fecha as fecha, concat(b.nombre, ' ', b.apellido) as nombre, a.total as total from factura a inner join cliente b on a.idcliente = b.identificacion where a.numero = $numero");
  if ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
elseif(array_key_exists("inicial", $_GET) && array_key_exists("final", $_GET)){
  $inicial = $_GET['inicial'];
  $final = $_GET['final'];
  $registros = mysqli_query($con,"select a.numero as factura, a.fecha as fecha, concat(b.nombre, ' ', b.apellido) as nombre, a.total as total from factura a inner join cliente b on a.idcliente = b.identificacion where a.fecha between '$inicial' and '$final'");
  while ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
else{
  $registros = mysqli_query($con, "select a.numero as factura, a.fecha as fecha, concat(b.nombre, ' ', b.apellido) as nombre, a.total as total from factura a inner join cliente b on a.idcliente = b.identificacion");
  while ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
$cad = json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>