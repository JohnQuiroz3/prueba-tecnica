<?php
require("../database.php");

$con = connect();
$vec = [];
if(!array_key_exists("id", $_GET)){
  $registros = mysqli_query($con, "select * from producto");
  while ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
else{
  $identificacion = $_GET['id'];
  $registros = mysqli_query($con,"select * from producto where id = $identificacion");
  if ($reg = mysqli_fetch_array($registros)){
    $vec[] = $reg;
  }
}
$cad = json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>