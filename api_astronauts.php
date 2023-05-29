<?php
    $url="https://ll.thespacedevs.com/2.2.0/astronaut/?limit=20";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    echo $result;
?>