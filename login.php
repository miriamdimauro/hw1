<?php
    // Verifica che l'utente sia già loggato, in caso positivo va direttamente alla home
    include 'auth.php';
    if (checkAuth()) {
        header('Location: home.php');
        exit;
    }

    if (isset($_POST["username"]) && isset($_POST["password"])) {
        
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $query = "SELECT * FROM users WHERE username = '".$username."'";
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));

        if (mysqli_num_rows($res) > 0) {
            $row = mysqli_fetch_assoc($res);
            if (password_verify($_POST['password'], $row['pwd'])) {
                $_SESSION["username"] = $row['username'];
                header("Location: home.php");
                mysqli_free_result($res);
                mysqli_close($conn);
                exit;
            }
            $error = "Username e/o password errati.";
       }
    }

?>

<!DOCTYPE html>
<html>
  <head>
    <title>AstroView</title>
    <link rel="stylesheet" href="login.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="login.js" defer="true"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
  </head>

  <body>

    <div class="container">
       <h1>AstroView</h1>
    </div>
    
    <form name='login' method='post'>
      <h2 class="purple">Login</h2>

      <?php   
      if (isset($error)) {
        echo "<p errorevalid'>$error</p>";
      } 
      ?>
      
      <p class="errore hidden">Please enter your username and password.</p>

      <label><input type='text' name='username' placeholder="Username"></label>
      <label><input type='password' name='password' placeholder="Password"><img src="eyeclosed.png" class="show"></label>
      <input type='submit' value="Login" class="button">
      <p>Don't have an account yet? <a href="sign_up.php">Sign up</a></p>
      <p>Back to <a href="index.php">homepage</a></p>
    </form>
  
  </body>
</html>
