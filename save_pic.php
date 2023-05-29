<?php

    require_once 'auth.php';
    if (!$username = checkAuth()) exit;

    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
    //query
    $username = mysqli_real_escape_string($conn, $username);
    $titolo = mysqli_real_escape_string($conn, $_POST['title']);
    $immagine = mysqli_real_escape_string($conn, $_POST['img']);

    $query = "INSERT INTO immagini(titolo,immagine, user) VALUES('$titolo','$immagine','$username')";
    
    if(mysqli_query($conn, $query)) 
    {
        echo json_encode(array('ok' => true));
        exit;
    }else
    {
        die(mysqli_error($conn));
    }

    mysqli_close($conn);
    echo json_encode(array('ok' => false));

?>