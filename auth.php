<?php

    require_once 'dbconfig.php';
    session_start();

    function checkAuth() {
        // true se esiste, altrimenti 0
        if(isset($_SESSION['username'])) {
            return $_SESSION['username'];
        } else 
            return 0;
    }
?>