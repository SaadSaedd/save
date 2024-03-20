<?php
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$email_from=  "37354@ma-web.nl";
$email_subject = "new form submission";
$email_body = "user name: $name.\n".
               "user Email: $visitor_email.\n".
               "subject: $subject.\n".
               "user message: $message.\n";

$to = "37354@ma-web.nl";

$headers = "from: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("location: contact.html");

?>