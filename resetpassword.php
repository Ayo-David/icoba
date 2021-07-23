<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">

    <title>ICOBA App - Reset Password</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link href="./mycss.css" rel="stylesheet">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    // <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>

<body>

    <?php

    $servername = "localhost";
    $username = "abstract_icoba";
    $password = "icoba101!";
    $dbname = "abstract_icoba";

    $error = "";
    $error2 = "";
    $message = "";

    // Create connection
    $con = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    if (
        isset($_GET["key"]) && isset($_GET["email"]) && isset($_GET["action"])
        && ($_GET["action"] == "reset") && !isset($_POST["action"])
    ) {
        $key = $_GET["key"];
        $email = $_GET["email"];
        $curDate = date("Y-m-d H:i:s");
        $query = mysqli_query(
            $con,
            "SELECT * FROM `password_reset_temp` WHERE `key`='" . $key . "' and `email`='" . $email . "';"
        );
        $row = mysqli_num_rows($query);
        if ($row == "") {
            $error .= '<div class="alert alert-danger" role="alert"><h2>Invalid Link</h2>
<p>The link is invalid/expired. Either you did not copy the correct link
from the email, or you have already used the key in which case it is 
deactivated.</p>
<p>Go back to the ICOBA App to reset password.</p> </div>';
        } else {
            $row = mysqli_fetch_assoc($query);
            $expDate = $row['expDate'];
            if ($expDate >= $curDate) {

                //  html was formerly here

            } else {
                $error .= "<div class='alert alert-danger' role='alert'> <h2>Link Expired</h2>
<p>The link is expired. You are trying to use the expired link which 
as valid only 24 hours (1 days after request).<br /><br /></p></div>";
            }
        }
        // if ($error != "") {
        //     echo "<div class='error'>" . $error . "</div><br />";
        // }
    } // isset email key validate end


    if (
        isset($_POST["email"]) && isset($_POST["action"]) &&
        ($_POST["action"] == "update")
    ) {
        $error = "";
        $pass1 = mysqli_real_escape_string($con, $_POST["pass1"]);
        $pass2 = mysqli_real_escape_string($con, $_POST["pass2"]);
        $email = $_POST["email"];
        $curDate = date("Y-m-d H:i:s");
        if ($pass1 != $pass2) {
            $error2 .= "<div class='alert alert-danger' role='alert'><p>Password do not match, both password should be same.<br /><br /></p></div>";
        }
        if ($error2 != "") {
            //echo "<div class='error'>" . $error . "</div><br />";
        } else {
            //$pass1 = md5($pass1);
            mysqli_query(
                $con,
                "UPDATE `users` SET `password`='" . $pass1 . "', `trn_date`='" . $curDate . "' 
WHERE `email`='" . $email . "';"
            );

            mysqli_query($con, "DELETE FROM `password_reset_temp` WHERE `email`='" . $email . "';");

            $message = '<div class="alert alert-success" role="alert"><p>Congratulations! Your password has been updated successfully.</p>
<p>You can now use your new password to login into ICOBA App</div>';
        }
    }
    ?>




    <body>
        <div id="login">
            <div class="text-center">

                <img src="./icon_.png" class="img-fluid" alt="Responsive image">
            </div>

            <h3 class="text-center text-white pt-5">ICOBA International Password Reset</h3>
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">



                        <div id="login-box" class="col-md-12">
                            <form id="login-form" class="form" action="" method="post" name="update">
                                <h3 class="text-center text-info">Reset App Password</h3>
                                <div class="form-group">
                                    <?php
                                    if ($error != "" || $message != "") {
                                        echo $error;
                                        echo $message;
                                    } else {
                                        if ($error2 != "") {
                                            echo $error2;
                                        }
                                    ?>

                                        <label for="username" class="text-info">Enter New Password:</label><br>
                                        <input type="password" name="pass1" id="password" class="form-control">
                                        <input type="hidden" name="action" value="update" />
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Re-Enter New Password:</label><br>
                                    <input type="password" name="pass2" id="password" class="form-control">
                                </div>
                                <div class="form-group">
                                    <!-- <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br> -->
                                    <input type="hidden" name="email" value="<?php echo $email; ?>" />
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Reset Password">
                                </div>
                            <?php }  ?>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    <!-- <br />
<form method="post" action="" name="update">
<input type="hidden" name="action" value="update" />
<br /><br />
<label><strong>Enter New Password:</strong></label><br />
<input type="password" name="pass1" maxlength="15" required />
<br /><br />
<label><strong>Re-Enter New Password:</strong></label><br />
<input type="password" name="pass2" maxlength="15" required />
<br /><br />
<input type="hidden" name="email" value="<?php //echo $email; 
                                            ?>" />
<input type="submit" value="Reset Password" />
</form> -->