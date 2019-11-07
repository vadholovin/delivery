<?php

// email address
$to = 'svdd@yandex.ru'; //вставить свой имейл 

$subject = 'Сообщение с лендинга';
$name = htmlspecialchars($_POST['form-client-name']);
$phone = htmlspecialchars($_POST['form-client-phone']);

$message = "Имя: $name<br>\r\n";
$message .= "Телефон: $phone<br>\r\n";
  
$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
$headers .= "X-Priority: 1\r\n";


$sentMail = mail($to, $subject, $message, $headers);
if($sentMail) //output success or failure messages
{ 
  echo 'done';
}else{
  echo 'error';
}
