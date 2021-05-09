<?php
	if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
		$uri = 'https://';
	} else {
		$uri = 'http://';
	}
	$uri .= $_SERVER['HTTP_HOST'];
	header('Location: '.$uri.'/main.html');

  $to_email = 'toptalentdev@gmail.com';
	$subject = 'Testing PHP Mail';
	$message = 'This mail is sent using the PHP mail function';
	$headers = 'From: test@test.com';
	mail($to_email,$subject,$message,$headers);
	exit;
?>