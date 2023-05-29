<?php

    $url="https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search=spacex";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    echo $result;
?>

