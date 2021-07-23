<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$servername = "localhost";
$username = "abstract_icoba";
$password = "icoba101!";
$dbname = "abstract_icoba";

// Create connection
$con = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

//$json = file_get_contents('php://input');
//$obj = json_decode($json, true);

//$email = $obj['email'];
$email = "ayodavid.ajayi@gmail.com";


if ($email != "") {

    $sel_query = "SELECT * FROM `users` WHERE email='" . $email . "'";
    $results = mysqli_query($con, $sel_query);
    $row = mysqli_num_rows($results);
    if ($row == "") {
        //echo json_encode("No user");
        echo "No user";
    } else {
        $expFormat = mktime(
            date("H"),
            date("i"),
            date("s"),
            date("m"),
            date("d") + 1,
            date("Y")
        );
        $expDate = date("Y-m-d H:i:s", $expFormat);
        $key = md5(2418 * 2 + $email);
        $addKey = substr(md5(uniqid(rand(), 1)), 3, 10);
        $key = $key . $addKey;

        // Insert Temp Table
        mysqli_query(
            $con,
            "INSERT INTO `password_reset_temp` (`email`, `key`, `expDate`)
VALUES ('" . $email . "', '" . $key . "', '" . $expDate . "');"
        );

        $output = '<p>Dear user,</p>';
        $output .= '<p>Please click on the following link to reset your password.</p>';
        $output .= '<p>-------------------------------------------------------------</p>';
        $output .= '<p><a href="https://schoolshell.com/icoba-app/resetpassword.php?
key=' . $key . '&email=' . $email . '&action=reset" target="_blank">
https://schoolshell.com/icoba-app/resetpassword.php
?key=' . $key . '&email=' . $email . '&action=reset</a></p>';
        $output .= '<p>-------------------------------------------------------------</p>';
        $output .= '<p>Please be sure to copy the entire link into your browser.
The link will expire after 1 day for security reason.</p>';
        $output .= '<p>If you did not request this forgotten password email, no action 
is needed, your password will not be reset. However, you may want to log into 
the ICOBA app and change your security password as someone may have guessed it.</p>';
        $output .= '<p>Thanks,</p>';
        $output .= '<p>ICOBA INTERNATIONAL</p>';
        $body = $output;
        $subject = "Password Recovery - ICOBA International";

        $email_to = $email;
        $fromserver = "sales@schoolshell.com";

        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'mail.schoolshell.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'sales@schoolshell.com';                     //SMTP username
            $mail->Password   = 'password101!';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom('sales@schoolshell.com', 'Mailer');
            $mail->addAddress('ayodavid@schoolshell.com', 'Joe User');     //Add a recipient
            //$mail->addAddress('ellen@example.com');               //Name is optional
            $mail->addReplyTo('sales@schoolshell.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $body;
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Message has been sent';
            //echo json_encode("Sent");
            // echo "Sent";
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            //echo json_encode('Mailer Error: ' . $mail->ErrorInfo);
            // echo 'Mailer Error: ' . $mail->ErrorInfo;
        }

        // if ($mail->Send()) {
        //     //echo json_encode("Sent");
        //     echo "Sent";
        // } else {
        //     //echo json_encode('Mailer Error: ' . $mail->ErrorInfo);
        //     echo 'Mailer Error: ' . $mail->ErrorInfo;
        // }
    }
}
