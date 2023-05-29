<!DOCTYPE html>
<html>
<head>
    <title>AstroView</title>
    <link rel="stylesheet" href="galleria.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Oswald:wght@500&display=swap" rel="stylesheet">
    <script src="galleria.js" defer="true"></script>
  </head>

<body>
    <article class="glass">
    <header>
            <nav class="one">
                <div class="title"> AstroView <img class="logo" src="logo.png"></div>
                <div class="link">
                    <a href="profile.php">Profile</a>
                    <a href="home.php">Home</a>
                    <a href="logout.php">Logout</a>
                </div>
            </nav>
            <nav class="two">
                <a href="tecnologia.php">TECHNOLOGY</a>
                <a href="galleria.php">PHOTO GALLERY</a>
                <a href="lanci.php">LAUNCHES</a>
                <a href="sistemasolare.php">SOLAR SYSTEM</a>
                <a href="astronauti.php">ASTRONAUTS</a>
            </nav>
        </header>

        <section id="galleria">
            <p>Welcome to the NASA Image Library. Look for your favorites celestial objects and save them directly to your profile.</p>
            <form method='post'>
                <input type='text' id='nome'>
                <input type='submit' id='submit' value='&#128269'> 
            </form>
        </section>

        <section id="view">
        </section>

</article>
</body>
</html>
  