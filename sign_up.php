<?php 
  require_once 'auth.php';

 if (checkAuth()) {
      header("Location: home.php");
      exit;
  } 

  $error = array();
  if(isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["confirm_password"]) && isset($_POST["email"]) && isset($_POST["name"]) && 
      isset($_POST["surname"]) && isset($_POST["genere"])) {
  $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

    if(!preg_match('/^[a-zA-Z0-9_]{4,24}$/', $_POST['username'])) 
    {
      $error[] = "Username non valido";
    } else 
    {
      $username = mysqli_real_escape_string($conn, $_POST['username']);
      $query = "SELECT username FROM users WHERE username = '$username'";
      $res = mysqli_query($conn, $query);
      if (mysqli_num_rows($res) > 0) { $error[] = "Username già utilizzato"; }
    }
    
    if (strlen($_POST["password"]) < 8) { $error[] = "Caratteri password insufficienti";} 

    if(!(preg_match('/^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{1,8}$/',$_POST["password"]))) { $errore[] = "La password deve contenere almeno un carattere speciale.";}

    if (strcmp($_POST["password"], $_POST["confirm_password"]) != 0) { $error[] = "Le password non coincidono";}

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) 
    {
      $error[] = "Email non valida";
    } else 
    {
      $email = mysqli_real_escape_string($conn, strtolower($_POST['email']));
      $res = mysqli_query($conn, "SELECT email FROM users WHERE email = '$email'");
      if (mysqli_num_rows($res) > 0) {$error[] = "Email già utilizzata";}
    }

    if(count($error)==0)
    {
      $name = mysqli_real_escape_string($conn, $_POST['name']);
      $surname = mysqli_real_escape_string($conn, $_POST['surname']);
      $password = mysqli_real_escape_string($conn, $_POST['password']);
      $password = password_hash($password, PASSWORD_BCRYPT);
      $genere = mysqli_real_escape_string($conn, $_POST['genere']);

      $query="INSERT INTO users(username,pwd,nome,cognome,email,genere) VALUES
        (\"$username\", \"$password\", \"$name\", \"$surname\", \"$email\",\"$genere\")";
        
      if (mysqli_query($conn, $query)) 
      {
        header("Location: home.php");
        exit;
      } else 
      {
        $error[] = "Errore di connessione al Database";
      }
    }
    mysqli_close($conn);
  }
?>

<!DOCTYPE html>
<html>
  <head>
    <title>AstroView</title> 
    <link rel="stylesheet" href="sign_up.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="sign_up.js" defer="true"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
  </head>

  <body>
    <h1>AstroView</h1>
    <h2>Sign up <span class='purple'> now </span></h2>
    <article>
      
      <main>
        <form name='signup' method='post'>  

          <?php 
            if(isset($error)) {
              foreach($error as $err) {
                echo "<p class='errore'>".$err."</p>";
              }
            } 
          ?>
          
    
          <!---EMAIL-->
          <p id="errore_email_r" class="errore hidden">Invalid Email </p>
          <p id="errore_email_u" class="errore hidden">Email already registered</p>
          <p id="errore_email_e" class="errore hidden">Required</p>
          <label id="email">Email <input type='text' name='email'></label>
          
          <!---USERNAME-->
          <p id="errore_username_r" class="errore hidden">Only letters, numbers, and underscores are allowed, with a maximum of 16 characters.</p>
          <p id="errore_username_u" class="errore hidden">Username already registered</p>
          <p id="errore_username_e" class="errore hidden">Required</p>
          <label id="username">Username <input type='text' name='username'> </label>

          <!---PASSWORD-->
          <p id="errore_password" class="errore hidden">The password must contain at least 8 characters and one special character.</p>
          <p id="errore_password_e" class="errore hidden">Required</p>
          <label id="password">Password <input type='password' name='password'><img src="eyeclosed.png" class="show"></label>
          
          <p id="errore_password2" class="errore hidden"> Required</p>
          <p id="errore_different_password" class="errore hidden">The passwords do not match.</p>
          <label id="confirm_password">Confirm Password<input type='password' name='confirm_password'><img src="eyeclosed.png" class="show"></label>

             <!---NAME-->
          <p id="errore_name" class="errore hidden"> Required</p>
          <label id="name">Name <input type='text' name='name'></label>
          
          <!---SURNAME-->
          <p id="errore_surname" class="errore hidden"> Required</p>
          <label id="surname">Surname <input type='text' name='surname'></label>
          
          <!---GENERE-->
          <p id="errore_genere" class="errore hidden"> Required</p>
          <label id="genere">Gender
          <input type='radio' name='genere' value="m">Male
          <input type='radio' name='genere' value="f">Female
          <input type='radio' name='genere' value="a">Other
          </label>

          
          <label><input type='submit' value="Create account" class="button"></label>  
          <p id="fine"> Already have an account? <a href="login.php">Sign in</a></p>
          <p id="fine">Back to <a href="index.php">homepage</a></a>
        
        </form>
      </main>
    </article>
  </body>
</html>

