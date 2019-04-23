<?php
require '/usr/share/php/libphp-phpmailer/class.phpmailer.php';
require '/usr/share/php/libphp-phpmailer/class.smtp.php';
$name =$_POST['name'];
$email =$_POST['email'];
$website =$_POST['website'];
$comments =$_POST['comments'];
if($website == 'Email')
{

$mail = new PHPMailer;
$mail->setFrom('Devlin821@gmail.com');
$mail->addAddress('Devlinpaddock@gmail.com');
$mail->Subject = 'Message sent from ImpactSite';
$mail->Body = $email . ' ' .$name .' ' .$comments;
$mail->IsSMTP();
$mail->SMTPSecure = 'ssl';
$mail->Host = 'ssl://smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Port = 465;

$mail->Username = 'DevlinPaddock@gmail.com';

$mail->Password = 'arcturusmengsk';
if(!$mail->send()) {
  echo 'Email is not sent.';
  echo 'Email error: ' . $mail->ErrorInfo;
} else {
  echo 'Email has been sent.';
}
}
else
{

$mail = new PHPMailer;
$mail->setFrom('Devlin821@gmail.com');
$mail->addAddress('6039333797@vtext.com');
$mail->Subject = 'Message sent from ImpactSite';
$mail->Body = $email . ' ' .$name .' ' .$comments;
$mail->IsSMTP();
$mail->SMTPSecure = 'ssl';
$mail->Host = 'ssl://smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Port = 465;

$mail->Username = 'DevlinPaddock@gmail.com';

$mail->Password = 'arcturusmengsk';
if(!$mail->send()) {
  echo 'Email is not sent.';
  echo 'Email error: ' . $mail->ErrorInfo;
} else {
  echo 'text has been sent.';
}
}
?>
