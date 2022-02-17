<!DOCTYPE html><html>

  <head>
    <title>Welcome</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="style.css" rel="stylesheet" type="text/css"/>
  </head>
  
  <body>

    <div class="topnav">
      <a class="active" href="index.php">Home</a>
      <a href="signup.php">Sign up</a>
      <a href="login.php">Log in</a>
      <a href="login.php?logout=1" style="float: right;">Logout</a>
    </div>

    <div class="desktop">
  
      <div class="grid-container">
        <div class="header" style="padding: 100px;">
          <?php
          chdir("backend");
          require("./setup.php");
          $currentUser = getCurrentUser();
          if($currentUser === null){
            header("Location: https://techlm77.com/mediapage/login.php");
          } else {
            echo "You are signed in as " . $currentUser['email_address'];
          }
          ?>
          </div>
          <div class="main" style="width: 1000px;margin: 0 auto;">

            <br><br>
            <div class="footer">

          </div>
        </div>
      </div>
    </div>

  </body>

</html>
