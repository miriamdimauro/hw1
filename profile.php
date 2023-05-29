
<?php 
    require_once 'auth.php';
    if (!$username = checkAuth()) {
        header("Location: login.php");
        exit;
    }
    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
    $query = "SELECT * FROM users WHERE username = '".$username."'";
    $res = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($res);
   
?>

<!DOCTYPE html>
<html>
<head>
    <title>AstroView</title>
    <link rel="stylesheet" href="profile.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="profilo.js" defer="true"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
  </head>
  
  <body>
  <div class="glass">
        <header>
            <nav class="one">
                <div class="title"> AstroView <img class="logo" src="logo.png"></div>
                <div class="link">
                    <a href="home.php">Home</a>
                    <a href="logout.php">Logout</a>
                </div>
            </nav>
      <h1>Welcome, <?php echo $_SESSION["username"];?>.</h1>
    <div id="random_quote"></div>
  </header>

  <h2> Personal information. </h2>

  <section id="dati">
  </section>

  <h2> Here are your favorites. </h2>
  <section id='view'></section>
    
 </div>
</body>
</html>
    
  

   