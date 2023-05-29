<?php

require_once 'auth.php';
if (!$username = checkAuth()) {
    header("Location: login.php");
    exit;
}
$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
$query = "SELECT * FROM users WHERE username = '".$username."'";
$res = mysqli_query($conn, $query);
$riga = mysqli_fetch_assoc($res);

if(mysqli_num_rows($res) > 0) 
{
    $record=array('ok' => true,
            'nome' =>  $riga['nome'],
            'cognome' =>  $riga['cognome'],
            'genere' => $riga['genere'],
            'username' =>  $riga['username'],
            'email' =>  $riga['email'],);
    echo json_encode(array('data' => $record));
    mysqli_close($conn);
    exit;
}
    
    
mysqli_close($conn);
echo json_encode(array('ok' => false));

?>