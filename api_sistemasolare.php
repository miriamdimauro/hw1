<?php
if (!isset($_GET["q"])) {
    echo "Non dovresti essere qui";
    exit;
    }

    $url="https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,".urlencode($_GET["q"]);
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    echo $result;
?>