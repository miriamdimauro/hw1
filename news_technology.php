<?php

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://newsdata.io/api/1/news?apikey=pub_23308c00c650f1fb56427beee9dcfd8de3295&category=technology&language=en");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    echo $result;
?>
