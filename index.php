<?php
	$to_email = 'toptalentdev@gmail.com';
	$subject = 'Testing PHP Mail';
	$message = 'This mail is sent using the PHP mail function';
	$headers = 'From: test@test.com';
	mail($to_email,$subject,$message,$headers);
	exit;
?>