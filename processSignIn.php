<?php

// I know this really isn't doing much of anything at the moment. I'm getting to it

//Retrieve form data.
$emailAddress = ($_GET['emailAddress']) ?$_GET['emailAddress'] : $_POST['emailAddress'];
$password = ($_GET['password']) ?$_GET['password'] : $_POST['password'];
$remember = ($_GET['remember']) ?$_GET['remember'] : $_POST['remember'];

//flag to indicate which method it uses. If POST set it to 1
if ($_POST) $post=1;

//recipient - change this to your name and email
$to = 'Steve Hickey <steve.hickey@freshtilledsoil.com<script type="text/javascript">
/* <![CDATA[ */
(function(){try{var s,a,i,j,r,c,l=document.getElementById("__cf_email__");a=l.className;if(a){s='';r=parseInt(a.substr(0,2),16);for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
/* ]]> */
</script>>';
//sender
$from = ' <' . $emailAddress . '>';

//subject and the html message
$subject = 'Sign In';
$message = $emailAddress, $password, $remember;

//send the mail
$result = sendmail($to, $subject, $message, $from);

//if POST was used, display the message straight away
if ($_POST) {
    if ($result) echo 'Thank you! We have received your message.';
    else echo 'Sorry, unexpected error. Please try again later';

//else if GET was used, return the boolean value so that
//ajax script can react accordingly
//1 means success, 0 means failed
} else {
    echo $result;
}

//Simple mail function with HTML header
function sendmail($to, $subject, $message, $from) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    $headers .= 'From: ' . $from . "\r\n";

    $result = mail($to,$subject,$message,$headers);

    if ($result) return 1;
    else return 0;
}
?>
