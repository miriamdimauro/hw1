<?php
    require_once 'auth.php';
    if (!$username = checkAuth()) exit;

    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
   
    if (!isset($_GET["q"])) {
        echo "Non dovresti essere qui";
        exit;
    }

    $url="https://images-api.nasa.gov/search?q=".urlencode($_GET["q"]);
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
   
    $result_array=json_decode($result,true);

    $items = $result_array['collection']['items'];
    foreach ($items as $index => $item) {
        if (!isset($item['links'])) {
            $items[$index]['links'] = [
                [
                    'href' => null,
                ],
            ];
        }
    }
    
    

    for ($i = 0; $i < 9; $i++) {
        $item = $items[$i];
        $immagine = $item['links'][0]['href'];

        $query = "SELECT * FROM immagini WHERE immagine = '$immagine' AND user ='$username'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));
        if(mysqli_num_rows($res) > 0) {
            $item['exists']=true;
        }else{
            $item['exists']=false;
        }

        $items[$i] = $item;
    }


    echo json_encode($items);

?>
