<?php
require("../database.php");

$con = connect();
$vec = [];
if(!array_key_exists("factura", $_GET)){
  $registros = mysqli_query($con, "select * from detalle_factura");
  while ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
else{
  $idfactura = $_GET['factura'];
  $registros = mysqli_query($con,"select a.idfactura as factura, c.fecha as fecha, concat(d.nombre, ' ', d.apellido) as nombre, c.total as totalfactura, b.id as id, b.nombre as producto, a.cantidad as cantidad, a.totalproducto as totalproducto from factura c inner join detalle_factura a on c.numero = a.idfactura inner join producto b on a.idproducto = b.id inner join cliente d on c.idcliente = d.identificacion where a.idfactura = $idfactura");
  while ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
$cad = json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>