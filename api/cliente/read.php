<?php
require("../database.php");

$con = connect();
$vec = [];
if(!array_key_exists("identificacion", $_GET)){
  $registros = mysqli_query($con, "select * from cliente");
  while ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
else{
  $identificacion = $_GET['identificacion'];
  $registros = mysqli_query($con,"select * from cliente where identificacion = $identificacion");
  if ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
$cad = json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>