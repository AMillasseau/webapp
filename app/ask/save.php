<?php
$ar = [$_GET["name"],$_GET["contat"],$_GET["message"] 

 $fname = 'data.csv'; //NAME OF THE FILE
 $fcon = fopen($fname,'a');
 $fputcsv($con,$ar);
 fclose($fcon);
 ?>
