<?php 

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$telnumber = $_POST['telnumber'];
	$additionalinfo = $_POST['additionalinfo'];
	
	$mailTo = "info@oxforddentalcentre.co.uk";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an e-mail from ".$name.".\n\n".$additionalinfo;
	
	mail($mailTo, $name, $txt, $headers);
	
	
	header("Location: contact.php?mailsent");
	
}