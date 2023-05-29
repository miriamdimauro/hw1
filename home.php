<?php 
    require_once 'auth.php';
    if (!$username = checkAuth()) {
        header("Location: login.php");
        exit;
    }
?>

  <head>
    <title>AstroView</title>
    <link rel="stylesheet" href="home.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Oswald:wght@500&display=swap" rel="stylesheet">
    <script src="home.js" defer="true"></script>
  </head>
  
  <body>
    <article class="glass">
        <header>
            <nav class="one">
                <div class="title"> AstroView <img class="logo" src="logo.png"></div>
                <div class="link">
                    <a href="profile.php">Profile</a>
                    <a href="logout.php">Logout</a>
                </div>
            </nav>
      <h1>Welcome to our blog, an exciting place to explore our world and the wonders of the cosmos.</h1>
      <p class="subtitle">Are you ready for an exciting journey among stars, planets, galaxies, and much more?</p> 
    </header>
 
    <nav class="two">
	    <a href="tecnologia.php">TECHNOLOGY</a>
	    <a href="galleria.php">PHOTO GALLERY</a>
	    <a href="lanci.php">LAUNCHES</a>
      <a href="sistemasolare.php">SOLAR SYSTEM</a>
      <a href="astronauti.php">ASTRONAUTS</a>
    </nav>

  <h2> BREAKING NEWS </h2>
  <p>Welcome to our Breaking News List, your source for the latest and most significant headlines from around the world. 
    Stay informed and up-to-date with our curated selection of news about space! Whether it's a groundbreaking discovery, a significant development, or a major event, we've got you covered. 
  <section id="view">
  </section>
  </article>
  </body>
  </html>