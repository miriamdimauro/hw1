<?php

    require_once 'auth.php';
    if (!$username = checkAuth()) exit;

    if (!isset($_GET["q"])) 
    {
        echo "Non dovresti essere qui";
        exit;
    }

    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
    $username = mysqli_real_escape_string($conn, $username);
    $img= mysqli_real_escape_string($conn, $_GET["q"]);

    $query = "DELETE FROM immagini WHERE immagine='$img' AND user = '$username'";
    $res=mysqli_query($conn, $query);
    if($res) {
        if(mysqli_affected_rows($conn) > 0) {
            mysqli_close($conn);
            echo json_encode(array('ok' => true));
            exit;
        } else {
            mysqli_close($conn);
            echo json_encode(array('ok' => false));
            exit;
        }
    }

    mysqli_close($conn);
    echo json_encode(array('ok' => false));
    
?>