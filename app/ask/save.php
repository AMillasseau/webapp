<?php
 $fieldA = $_POST["textnames"];
 $fieldB = $_POST["fathername"];
 $fieldC = $_POST["paddress"];
 $fieldD = $_POST["personaladdress"];
 $fieldE = $_POST["sex"];
 $fieldF = $_POST["Stream"];
 $fieldG = $_POST["Core-1"];
 $fieldH = $_POST["Core-2"];
 $fieldI = $_POST["Elective-1"];
 $fieldJ = $_POST["Elective-2"];
 $fieldK = $_POST["Elective-3"];
 $fieldL = $_POST["Elective-4"];
 $fieldM = $_POST["Compulsory"];

 $keys = array($fieldA,$fieldB,$fieldC,$fieldD,$fieldE,$fieldF,$fieldG,$fieldH,$fieldI,$fieldJ,$fieldK,$fieldL,$fieldM); //THIS IS WHERE YOU PUT THE FORM ELEMENTS ex: array('$fieldA','$fieldB',etc)
 $csv_line = $keys;
 foreach( $keys as $key ){
     array_push($csv_line,'' . $_GET[$key]);

 }
 $fname = 'data.csv'; //NAME OF THE FILE
 $csv_line = implode(',',$csv_line);
 if(!file_exists($fname)){$csv_line = $csv_line."\r\n" ;}
 $fcon = fopen($fname,'a');
 $fcontent = $csv_line;
 fwrite($fcon,$csv_line);
 fclose($fcon);
 ?>
