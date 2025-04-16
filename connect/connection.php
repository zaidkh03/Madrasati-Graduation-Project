<?php
      $db_server = 'localhost';
      $db_user   = 'root';
      $db_Name = 'ishraf_project';
      $db_pass = '';
      $connnection ="";

    try{
      $connnection = mysqli_connect($db_server,$db_user,$db_pass,$db_Name);

    }
    catch(mysqli_sql_exception){

      echo"could not connect!";
    }
    
?>