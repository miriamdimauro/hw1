<?php

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://api.spaceflightnewsapi.net/v4/articles/");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    echo $result;
?>

