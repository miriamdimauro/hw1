<?php

    require_once 'auth.php';
    if (!$username = checkAuth()) exit;

    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);       
    $username = mysqli_real_escape_string($conn, $username);

    $query = "SELECT * FROM immagini WHERE user = '$username'";  
    $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
    $array = array();

    if(mysqli_num_rows($res) > 0) {
        while($riga = mysqli_fetch_assoc($res)){
            $dati=array('titolo' =>  $riga['titolo'],'immagine' => $riga['immagine']);
            $array[] = $dati; 
        }
        
        echo json_encode(array('ok' => true, 'data' => $array));
        mysqli_close($conn);
        exit;
    }

    mysqli_close($conn);
    echo json_encode(array('ok' => false));

?>